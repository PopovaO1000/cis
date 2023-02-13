import { Router } from "express";
import CriteriaController from "../controllers/CriteriaController";

const criteriaRouter = Router();

criteriaRouter.post('/create', CriteriaController.createCriteria);

export default criteriaRouter;