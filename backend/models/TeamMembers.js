module.exports = function(sequelize, DataTypes) {
    var TeamMembers = sequelize.define("team_members", {
        teamId: DataTypes.INTEGER,
        studentId: DataTypes.INTEGER
    });
    return TeamMembers
}