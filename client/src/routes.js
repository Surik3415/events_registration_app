import { EVENT_ROUTE, USER_EVENT_ROUTE, USER_EVENT_REGISTER } from "./utils/consts";
import Events from "./pages/Events"
import UserEvent from "./pages/UserEvent"
import Register from "./pages/Register";


export const publicRoutes = [
  {
    path: EVENT_ROUTE,
    Component: Events,

  },
  {
    path: EVENT_ROUTE + '/:id',
    Component: UserEvent,

  }
  ,
  {
    path: USER_EVENT_ROUTE,
    Component: UserEvent
  },

  {
    path: EVENT_ROUTE + '/:id' + USER_EVENT_REGISTER,
    Component: Register
  }

  ,
  {
    path: EVENT_ROUTE + '/:id',
    Component: UserEvent,

  }
]
