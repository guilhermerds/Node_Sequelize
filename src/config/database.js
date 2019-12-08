module.exports= {
    dialect: 'mysql',
    host: 'localhost',
    database: 'sqlnode',
    username: 'root',
    password: '',
    define : {
        timestamps: true,
        underscored: true,
    },
};

/*
* timestamps = true --> define que toda tabela do banco vai ter um campo 
* created_at e um campo updated_at
********************************************************************************
* underscored --> o nome da tabela ficará separa por _ em vez da letra maiúscula
*/