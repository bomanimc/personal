const path = require('path');
const Express = require('express');
const robots = require('express-robots');

const app = new Express();

app.set('port', (process.env.PORT || 3000));
app.set('env', (process.env.NODE_ENV || 'production'));
app.use(Express.static(path.join(__dirname, 'build')));
app.use(robots(`${__dirname}/robots.txt`));

// Google verification code
// TODO: Add Verification Code
// app.get('', function(req, res) {
//     res.render('');
// });

// Universal routing and rendering handled by React & react-router
// on the client-side.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// start the server
app.listen(app.get('port'), () => {
  console.log(`[${app.get('env')}] Express server listening on port ${app.get('port')}`);
});
