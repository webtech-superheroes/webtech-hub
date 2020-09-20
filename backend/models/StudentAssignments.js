module.exports = function(sequelize, DataTypes) {
    var StudentAssignments = sequelize.define("student_assignments", {
        studentId: DataTypes.INTEGER,
        startDate: DataTypes.DATE,
        repo: DataTypes.STRING,
        submited: DataTypes.BOOLEAN,
        graded: DataTypes.BOOLEAN,
        grade: DataTypes.INTEGER
    });
    return StudentAssignments
}