const { Model, DataTypes } = require('Sequelize');

class Users extends Model{
    static init(sequelize){
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, { sequelize })
    }
}

module.exports = Users;