import { Router } from 'express';
import ContratcController from './app/controller/ContratcController';
import UsersController from './app/controller/UsersController';
import CompaniesController from './app/controller/CompaniesController';
const routes = Router();

routes.get('/', function(req, res) {
    return res.json({
        ok: true
    })
})
 
routes.get('/contr', ContratcController.index);
routes.get('/contr/:id', ContratcController.show);
routes.post('/contr', ContratcController.store);
routes.put('/contr/:id', ContratcController.update);
routes.delete('/contr/:id', ContratcController.delete);

routes.get('/user', UsersController.index);
routes.get('/user/:id', UsersController.show);
routes.post('/user', UsersController.store);
routes.put('/user/:id', UsersController.update);
routes.delete('/user/:id', UsersController.delete);

routes.get('/companies', CompaniesController.index);
routes.get('/companies/:id', CompaniesController.show);
routes.post('/companies', CompaniesController.store);
routes.put('/companies/:id', CompaniesController.update);
routes.delete('/companies/:id', CompaniesController.delete);

export default routes;
