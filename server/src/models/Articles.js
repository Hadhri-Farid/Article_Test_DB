module.exports = (sequelize, DataTypes) =>
    sequelize.define('Articles',{
        title: DataTypes.STRING,
        text: DataTypes.STRING,
        img: DataTypes.STRING
    })
