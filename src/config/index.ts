import 'dotenv/config';

// can change at package.json with run command 'development' | 'prod' | 'test
const env = (process.env.NODE_ENV = 'development');
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// -> set process.env.NODE_ENV = undefine -> 'development'

// case 1. make each .envfile => .env.develop // .env.prod // .env.test
// case 2. make onlyone .envfile and write  all enviroment variables

const config = {
    development: {
        apiport: process.env.API_PORT,
        dbhost: process.env.DBHOST,
        dbuser: process.env.DBUSER,
        db: process.env.DB,
        dbpassword: process.env.DBPASSWORD,
        tokenkey: process.env.TOKEN_KEY,
    },
    product: {
        PORT: process.env.PORT,
        USER: 'prod',
    },
    test: {
        PORT: process.env.PORT,
        USER: 'test',
    },
};
// console.log('config', config.development);

export default config['development'];

// export config['development'] | config['prod']  | config['test']
