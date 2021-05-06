"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserScheme = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        min: 8,
        max: 256,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 256,
    }
});
exports.default = mongoose_1.default.model("User", UserScheme);
//# sourceMappingURL=user.model.js.map