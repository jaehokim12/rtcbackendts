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
exports.register = void 0;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registerDao = __importStar(require("../dao/registerDao"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('register req', req.body);
    try {
        const { username, mail, password } = req.body;
        let userExist = yield registerDao.registerDao(mail);
        console.log('userExist', userExist);
        if (userExist) {
            return res.status(200).send('already email exist');
        }
        const encryptedPassword = yield (0, bcryptjs_1.hash)(password, 10);
        let result = yield registerDao.registerDaoinsert({ username, mail, encryptedPassword });
        console.log('result insert', result);
        // let userDetail;
        const token = jsonwebtoken_1.default.sign({
            userId: username,
            mail,
        }, `adfb!23`, {
            expiresIn: '24h',
        });
        console.log('token::::', token);
        res.status(201).json({
            userDetail: {
                mail: mail,
                token: token,
                username: username,
            },
        });
    }
    catch (_a) {
        return res.status(500).send('Something went wrong. Please try again');
    }
});
exports.register = register;
exports.default = exports.register;
//# sourceMappingURL=register.js.map