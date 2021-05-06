"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = express_1.default();
const PORT = 42069;
app.get("/", (req, res) => {
    res.status(200).send(`API is running in ${process.env.NODE_ENV} mode `);
    req;
});
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map