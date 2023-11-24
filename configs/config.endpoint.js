const defaultPort = 8081;
const development = {
  server: {
    port: process.env.DEV_PORT || defaultPort,
  },
};
const test = {
  server: {
    port: process.env.STAGING_PORT || defaultPort,
  },
};
const staging = {
  server: {
    port: process.env.STAGING_PORT || defaultPort,
  },
};
const production = {
  server: {
    port: process.env.PRO_PORT || defaultPort,
  },
};

const config = { development, staging, production, test };

module.exports = config[process.env.NODE_ENV || "development"];
