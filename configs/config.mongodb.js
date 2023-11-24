const defaultDatabaseString = "mongodb+srv://muradvn2003:Y2k5PTyQmhV3Nd1M@cluster0.de9mv1p.mongodb.net/?retryWrites=true&w=majority";
const development = {
  db: {
    stringConnect: process.env.DEV_DATABASE_STRING || defaultDatabaseString,
  },
};
const staging = {
  db: {
    stringConnect: process.env.STAGING_DATABASE_STRING || defaultDatabaseString,
  },
};
const test = {
  db: {
    stringConnect: process.env.STAGING_DATABASE_STRING || defaultDatabaseString,
  },
};
const production = {
  db: {
    stringConnect: process.env.PRO_DATABASE_STRING || defaultDatabaseString,
  },
};

const config = { development, staging, production, test };

module.exports = config[process.env.NODE_ENV || "development"];
