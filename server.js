const path = require('path');
const Express = require('express');

const app = new Express();

app.set('port', (process.env.PORT || 3000));
app.set('env', (process.env.NODE_ENV || 'production'));
app.use(Express.static(path.join(__dirname, 'src', 'static')));

// Universal routing and rendering handled by React & react-router
// on the client-side.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'static', 'index.html'));
});

// Start the server
app.listen(app.get('port'), () => {
  console.log(`[${app.get('env')}] Express server listening on port ${app.get('port')}`);
});
