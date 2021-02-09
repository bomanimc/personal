import React, { Component } from 'react';
import styled from 'styled-components';
import Sketch from 'react-p5';
import Layout from '../../components/layout';
import { BaseAnimationPage } from '../../components/commonComponents';

class Metastasis extends Component {
  x = 0;

  y = 0;

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
  };

  draw = (p5) => {
    p5.clear();
    p5.ellipse(p5.mouseX, p5.mouseY, 400, 400);
  };

  render() {
    return (
      <Layout showLinksBar={false}>
        <BaseAnimationPage title="Metastasis">
          <Metastasis.Container>
            <Sketch setup={this.setup} draw={this.draw} />
          </Metastasis.Container>
        </BaseAnimationPage>
      </Layout>
    );
  }
}

Metastasis.Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export default Metastasis;
