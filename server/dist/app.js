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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const cors_1 = __importDefault(require("cors"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const UserRouter_1 = __importDefault(require("./routers/UserRouter"));
const CriteriaRouter_1 = __importDefault(require("./routers/CriteriaRouter"));
class App {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.settings();
        this.usages();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 5000);
    }
    usages() {
        this.app.use((0, cors_1.default)({
            origin: process.env.CLIENT_URL,
            methods: ["GET", "POST"],
            credentials: true
        }));
        this.app.use(express_1.default.json());
        this.app.use((0, express_fileupload_1.default)({}));
        this.app.use(express_1.default.static('./excel_doc'));
    }
    routes() {
        this.app.use('/users', UserRouter_1.default);
        this.app.use('/criteria', CriteriaRouter_1.default);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.app.listen(this.app.get('port'));
                console.log(`Server works on PORT ${this.app.get('port')}`);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.App = App;
