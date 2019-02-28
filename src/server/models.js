const Sequelize = require('sequelize');

// Connect to the database
const sequelize = new Sequelize({
  database: 'sequelize_lesson',
  dialect:  'postgres',
});


// Define an Artist
const Talent = sequelize.define('talent', {
  fname: {
    type: Sequelize.STRING(64),
    allowNull: false
  },
  lname: {
    type: Sequelize.STRING(64),
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(128),
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING(128),
    allowNull: false,
  }

});


const Company = sequelize.define('company', {
  email: {
  type: Sequelize.STRING(128),
  allowNull: false,
  validate: {
    isEmail: true
  }
});

// define the association between Artists --<< Records
// @see https://www.postgresql.org/docs/10/static/ddl-constraints.html#DDL-CONSTRAINTS-FK
Artist.hasMany(Record, { onDelete: 'cascade' });

// make the association from both directions
Record.belongsTo(Artist);

module.exports = {
  Artist,
  Record,
  sequelize,
};
