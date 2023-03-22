const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('countryActivities', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, {timestamps: false});
};
