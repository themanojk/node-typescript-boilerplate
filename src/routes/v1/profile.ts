// Dependency
import Router from 'express';

//Requirements
import profileController from '../../controllers/profile.controller';

const routerV1: Router.Router = Router();

routerV1.get("/users", profileController.getUsers);
routerV1.post("/user", profileController.insertUser);
routerV1.get('/user/:id', profileController.getUserById);

export default routerV1;