module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true,
            }
        },
        password_hash:{
            type: DataTypes.STRING,
            allowNull: false
        },
        role:{
            type: DataTypes.ENUM("user","admin"),
            defaultValue: "user",
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    });

    User.associate = (models) =>{
        User.hasMany(models.Order, {foreignKey: "userId"});
    };

    return User;
}