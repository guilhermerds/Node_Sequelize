const { Model, DataTypes } = require('Sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,

        }, { sequelize })
    }
}

module.exports = User;