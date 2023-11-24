const development = {
  db: {
    stringConnect: process.env.DEV_DATABASE_STRING,
  },
};
const staging = {
  db: {
    stringConnect: process.env.STAGING_DATABASE_STRING,
  },
};
const test = {
  db: {
    stringConnect: process.env.STAGING_DATABASE_STRING,
  },
};
const production = {
  db: {
    stringConnect: process.env.PRO_DATABASE_STRING,
  },
};

const config = { development, staging, production, test };

module.exports = config[process.env.NODE_ENV || "development"];
