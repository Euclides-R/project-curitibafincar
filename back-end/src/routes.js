import { Router } from "express";
import CompanieController from "./app/controller/CompanieController";
const routes = Router();

routes.get('/companies', CompanieController.index);

export default routes;
