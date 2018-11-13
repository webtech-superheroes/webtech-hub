module.exports = function(sequelize, DataTypes) {
    var Students = sequelize.define("students", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        githubProfile: DataTypes.STRING,
        githubUsername: DataTypes.STRING
    });
    return Students
};