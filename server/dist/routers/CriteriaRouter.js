"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CriteriaController_1 = __importDefault(require("../controllers/CriteriaController"));
const criteriaRouter = (0, express_1.Router)();
criteriaRouter.post('/create', CriteriaController_1.default.createCriteria);
exports.default = criteriaRouter;
