import {ServerRoute} from 'hapi';

interface RouteController {
  getRoutes(): ServerRoute[];
}

export default RouteController;
