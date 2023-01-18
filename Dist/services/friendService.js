"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendService = void 0;
const friendService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { mail, password } = req.body;
        res.status(200);
        // return res.status(400).send('Invalid credentials. Please try again');
    }
    catch (_a) {
        return res.status(500).send('Something went wrong. Please try again');
    }
});
exports.friendService = friendService;
//# sourceMappingURL=friendService.js.map