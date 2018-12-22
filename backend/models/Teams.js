module.exports = function(sequelize, DataTypes) {
    var Teams = sequelize.define("teams", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        projectRepo: DataTypes.STRING
    });
    return Teams
}