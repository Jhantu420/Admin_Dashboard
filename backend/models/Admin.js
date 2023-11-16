// Model Admin DataPre
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define("Admin", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,     
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            unique: true, 
            allowNull: false,
        },
        role:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        subrole:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    
    return Model;
};