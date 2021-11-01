import { Router } from 'express';
const routes = Router();
 
routes.get('/',function(req,res){
    return res.json({
        ok:true
    })
})
export default routes;
