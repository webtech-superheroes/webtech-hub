module.exports = function(sequelize, DataTypes) {
    var Students = sequelize.define("students", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        githubId: DataTypes.BIGINT,
        githubProfile: DataTypes.STRING,
        githubUsername: DataTypes.STRING,
        profilePicture: DataTypes.STRING
    });
    return Students
}