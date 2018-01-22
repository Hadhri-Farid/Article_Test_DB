module.exports = (sequelize, DataTypes) =>
    sequelize.define('Articles',{
        title:{
            type: DataTypes.STRING,
            unique: true
        },
        text: DataTypes.STRING,
        img: DataTypes.STRING
    })