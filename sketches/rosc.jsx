"use client";

class MathematicalCurve {
  constructor(p5) {
    this.p5 = p5;
    this.path = [];
  }

  addPoint(x, y) {
    const { p5 } = this;
    this.path.push(p5.createVector(x, y));
  }

  draw() {
    const { p5 } = this;

    p5.beginShape();
    for (let i = 0; i < this.path.length; i += 1) {
      const vertex = this.path[i];
      p5.vertex(vertex.x, vertex.y);
    }
    p5.endShape();
  }
}

export const sketch = (p5) => {
  let frequencyScalingsRef = {};
  let xOscillatorType = "sine";
  let yOscillatorType = "sine";
  let drawingMode = "mathematical";
  let waveformsRef = {};
  let isClockMode = false;

  const getCanvasSizing = () => {
    const canvasContainer = document.getElementById("canvasContainer");

    return {
      width: typeof window !== "undefined" ? canvasContainer.offsetWidth : 0,
      height: typeof window !== "undefined" ? canvasContainer.offsetHeight : 0,
    };
  };

  // TODO: Pass in rest of state values as refs.
  p5.updateWithProps = (props) => {
    mathematicalCurve = props.mathematicalCurve;
    frequencyScalingsRef = props.frequencyScalingsRef;
    xOscillatorType = props.xOscillatorType;
    yOscillatorType = props.yOscillatorType;
    drawingMode = props.drawingMode;
    waveformsRef = props.waveformsRef;
    isClockMode = props.isClockMode;
  };

  const generateFile = () => {
    const filename = `${frequencyScalingsRef?.current.x}@${xOscillatorType}-${frequencyScalingsRef?.current?.y}@${yOscillatorType}`;
    p5.saveCanvas(filename, "png");
  };

  const drawAudioBasedCurve = (
    waveformXValues,
    waveformYValues,
    widthHalf,
    heightHalf,
  ) => {
    p5.strokeWeight(1);

    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);
    p5.beginShape();
    const maxValue = Math.max.apply(null, waveformXValues);
    const minValue = Math.min.apply(null, waveformXValues);
    if (minValue !== 0 && maxValue !== 0) {
      for (let i = 0; i < waveformXValues.length; i += 1) {
        const x = p5.map(
          waveformXValues[i],
          minValue,
          maxValue,
          -widthHalf,
          widthHalf,
        );
        const y = p5.map(
          waveformYValues[i],
          minValue,
          maxValue,
          heightHalf,
          -heightHalf,
        );
        p5.vertex(x, y);
      }
    }
    p5.endShape();
    p5.pop();
  };

  const drawMathematicalCurve = (widthHalf, heightHalf) => {
    p5.strokeWeight(2);

    const curve = new MathematicalCurve(p5);
    let angle = p5.TWO_PI;

    p5.push();
    p5.translate(p5.width / 2, p5.height / 2);
    while (angle >= 0) {
      const x = p5.map(
        p5.sin(angle * frequencyScalingsRef?.current.x - p5.HALF_PI),
        -1,
        1,
        -widthHalf,
        widthHalf,
      );
      const y = p5.map(
        p5.cos(angle * frequencyScalingsRef?.current?.y - p5.HALF_PI),
        -1,
        1,
        -heightHalf,
        heightHalf,
      );

      curve.addPoint(x, y);

      angle -= 0.001;
    }

    curve.draw();
    p5.pop();
  };

  p5.setup = (canvasParentRef) => {
    const { width, height } = getCanvasSizing();
    p5.createCanvas(width, height).parent(canvasParentRef);

    document.getElementById("saveButton").addEventListener("click", () => generateFile());
  };

  p5.draw = () => {
    p5.background(0, 0, 0, 255);

    const waveformXValues = waveformsRef?.current?.x?.getValue() ?? [];
    const waveformYValues = waveformsRef?.current?.y?.getValue() ?? [];
    const curveSizingFactor = isClockMode ? 0.9 : 0.8;
    const widthHalf = (p5.width * curveSizingFactor) / 2;
    const heightHalf = (p5.width * curveSizingFactor) / 2;

    p5.stroke(255);
    p5.strokeWeight(1);
    p5.noFill();

    if (drawingMode === "audio") {
      drawAudioBasedCurve(
        waveformXValues,
        waveformYValues,
        widthHalf,
        heightHalf,
      );
    } else {
      drawMathematicalCurve(widthHalf, heightHalf);
    }
  };

  p5.windowResized = () => {
    const { width, height } = getCanvasSizing();
    p5.resizeCanvas(width, height);
  };
};
