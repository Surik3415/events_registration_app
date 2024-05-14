import { EVENT_ROUTE, USER_EVENT_ROUTE } from "./utils/consts";
import Events from "./pages/Events"
import UserEvent from "./pages/UserEvent"

export const publicRoutes = [
  {
    path: EVENT_ROUTE,
    Component: Events,

  },
  {
    path: EVENT_ROUTE + '/:id',
    Component: Events,

  }
  ,
  {
    path: USER_EVENT_ROUTE,
    Component: UserEvent
  },

  {
    path: EVENT_ROUTE + '/:id' + USER_EVENT_ROUTE,
    Component: UserEvent
  }

]