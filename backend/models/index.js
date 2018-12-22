const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const db = {};
const basename = path.basename(module.filename);
const dbConfig = require('../config/db.json')

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    dialect: 'mysql',
    host: dbConfig.host
})

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
		.authenticate()
		.then(() => {
			console.log('Connection has been established successfully.');
		})
		.catch((err) => {
			console.log('Unable to connect to the database:', err);
		});
		
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Students = require('./Students')(sequelize, Sequelize);
db.Teams = require('./Teams')(sequelize, Sequelize);

module.exports = db;