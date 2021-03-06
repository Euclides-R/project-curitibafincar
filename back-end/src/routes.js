import { Router } from "express";
import CompanyController from "./app/controller/CompanyController";
import ContractController from "./app/controller/ContractController";
import UserController from "./app/controller/UserController";
const routes = Router();

routes.get('/contract', ContractController.index);
routes.get('/contract/:id', ContractController.show);
routes.post('/contract', ContractController.store);
routes.put('/contract/:id', ContractController.update);
routes.delete('/contract/:id', ContractController.delete);

routes.get('/companies', CompanyController.index);
routes.get('/companies/:id', CompanyController.show);
routes.post('/companies', CompanyController.store);
routes.put('/companies/:id', CompanyController.update);
routes.delete('/companies/:id', CompanyController.delete);

routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.show);
routes.post('/user', UserController.store);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

export default routes;
