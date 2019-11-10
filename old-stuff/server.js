const path = require('path');
const Express = require('express');
const robots = require('express-robots');

const app = new Express();

app.set('port', (process.env.PORT || 3000));
app.set('env', (process.env.NODE_ENV || 'production'));
app.use(Express.static(path.join(__dirname, 'build')));
app.use(robots(`${__dirname}/robots.txt`));

// Google verification code
app.get('/google74afddeb570fba09.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'google74afddeb570fba09.html'));
});

// Serve resume
app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'resume.pdf'));
});

// Universal routing and rendering handled by React & react-router
// on the client-side.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// start the server
app.listen(app.get('port'), () => {
  console.log(`[${app.get('env')}] Express server listening on port ${app.get('port')}`);
});
