// Dependency
import Router from 'express';

// Requirements
import profile from './profile';

const routerV1: Router.Router = Router();

routerV1.use("/profile", profile);

export default routerV1;