My belief that software is a medium has inspired me to explore art practice through code. It’s something I’ve mentioned a lot in speeches and conversation, but recently one artist that I respect helpfully challenged that concept. This week, I spent some time thinking about the capabilities of software as an artistic medium by making this project.

<br /><br />

One common feature of artistic mediums is that they can express meaning beyond their literal interpretation. For example, poems express deep multi-faceted meanings using words, rhythm, and other common features of language. While software can be used to engineer visuals and experiences that can achieve a similar result, I wondered: is the value of the code only defined by its utility, or can it have value beyond that? Can the code itself be the art?

<br /><br />

In this project, I experimented with re-representing code in order to explore its potential as a standalone medium. Rather than focusing on the functionality of the code, the actual text that comprises software is used to produce dynamic visualizations that are unique to the structure/implementation of the code. Two pieces of code that perform the same function will produce different visuals based on the variable names, tabbing, line breaks, etc they include.

<br /><br />

This visualization is produced by placing a semi-transparent square for each character in the file. It’s positioned based on its ASCII value and colored by its syntax highlight. The higher the ASCII value, the lower the square is based in the visualization. Code files with longer lines also have wider visualizations overall (compare the first image to the second, for example). To make this dynamic, I built an Atom plugin that makes the visualization capable of updating dynamically as a person writes code. After designing a few mocks, I looked for inspiration and found an awesome set of works by Norwegian artist Peter Struycken called [“Komputerstrukturen”](http://www.pstruycken.nl/EnDyn.html?Li,tag=a&b&70b), which heavily influenced the visualization I chose to use.

<br /><br />

More technically, the Atom plugin uses socket.io to send syntax-highlighted code to a server as the user writes the code. The server broadcasts that to a web page, which displays the code changes in real time and uses p5.js to update the visualization. Changed the syntax highlighter theme also changes the visualization.
