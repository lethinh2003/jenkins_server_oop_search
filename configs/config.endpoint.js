const development = {
  server: {
    port: process.env.DEV_PORT,
  },
};
const staging = {
  server: {
    port: process.env.STAGING_PORT,
  },
};
const production = {
  server: {
    port: process.env.PRO_PORT,
  },
};

const config = { development, staging, production };

module.exports = config[process.env.NODE_ENV || "development"];
