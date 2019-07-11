// Ecosystem definition for PM2

module.exports = {
  apps: [
    {
      name: 'server',
      script: './server.js',
      watch: true,
      env: {
        PORT: 80,
      },
    },
  ],
};
