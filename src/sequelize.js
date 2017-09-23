"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
function default_1() {
    const app = this;
    const sequelize = new sequelize_typescript_1.Sequelize({
        name: 'feathers-test',
        dialect: 'postgres',
        username: 'postgres',
        password: 'admin',
        host: 'localhost',
        modelPaths: [__dirname + '/models'],
        logging: false
    });
    const oldSetup = app.setup;
    app.set('sequelizeClient', sequelize);
    sequelize.sync({ force: true }); // <---- **** ONLY FOR DEV PURPOSES BEWARE *****
    app.setup = function (...args) {
        const result = oldSetup.apply(this, args);
        return result;
    };
}
exports.default = default_1;
;
//# sourceMappingURL=sequelize.js.map