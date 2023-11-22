module.exports = {
  apps: [
    {
      name: "Server_OOP_Research",
      script: "node",
      args: "server.js",
      env: {
        NODE_ENV: "development",
      },
      env_staging: {
        NODE_ENV: "staging",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
