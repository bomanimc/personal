Shrumen Lumen is [Foldhaus Collective's](https://www.foldhaus.com/shrumen-lumen/) interactive art installation made up of five glowing mushrooms that react to the presence of people. The mushrooms are made of translucent hand-folded corrugated plastic and contain up to 1600 NeoPixel LEDs. Each mushroom has an associated weight-sensing pad that – when stepped on – triggers a linear actuator to expand and contract the mushroom cap from a flat umbrella shape to a bulbous shape.

<br /> <br />

The initial version of the software was built with Node and C running on a Raspberry Pi, which I spoke about in more detail in my [!!Con](http://bangbangcon.com/) 2017 talk '[Making Mushrooms Glow](https://www.youtube.com/watch?v=T75FvUDirNM)'. Prior to the most recent presentation, we refactored the implementation of the project. The LEDs are now driven with a PixLite ArtNET controller and MadMapper sketches exported to a MiniMad. I rewrote the code so that we could use Arduino to control the weight-sensing pad, pad LED interactions, and linear actuator. This setup has proved to be more reliable than our Raspberry Pi setup for long-term installments.

<br /> <br />

Shrumen Lumen was initially built to display at Burning Man '16. Since then, Shrumen Lumen has been presented at Dubai’s Meet D3 Festival, the Smithsonian's Renwick Gallery, Pacific Place for Art Basel Hong Kong, and Cincinatti Art Museum. It is currently on display at Oakland Museum of California until February '20.
