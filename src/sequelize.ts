import { Sequelize } from 'sequelize-typescript';

export default function () {
    const app = this;
    const sequelize = new Sequelize({
        name: 'feathers-test',
        dialect: 'postgres',
        username: 'xxx',
        password: 'xxx',
        host: 'localhost',
        modelPaths: [__dirname + '/models'],
        logging: false
    });

    const oldSetup = app.setup;

    app.set('sequelizeClient', sequelize);

    sequelize.sync({force:true}); 
    
    app.setup = function (...args) {
        const result = oldSetup.apply(this, args);

        return result;
    };
};

