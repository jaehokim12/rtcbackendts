"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerservice = exports.tokenkey = void 0;
const database = __importStar(require("../database"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.tokenkey = process.env.TOKEN_KEY;
const registerservice = ({ username, mail, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database.promisePool.query(`select Email from User where Email='${mail}'`);
    // return result[0]
    const userExist = result[0].toLocaleString();
    if (userExist) {
        let data;
        data = {
            code: 400,
            Rowdata: userExist,
        };
        return data;
    }
    let data;
    const encryptedPassword = yield (0, bcryptjs_1.hash)(password, 10);
    console.log('encryptedPassword', encryptedPassword);
    console.log('env');
    const user = yield database.promisePool.query(`insert into User (Username,Email,Passwd) value('${username}','${mail.toLowerCase()}','${encryptedPassword}')`);
    console.log('user', user);
    return data = {
        code: 200,
        Rowdata: userExist,
    };
    const token = jsonwebtoken_1.default.sign({
        userId: username,
        mail,
    }, exports.tokenkey, {
        expiresIn: "24h",
    });
});
exports.registerservice = registerservice;
