import { EventController } from "./controller/EventController"
import { TicketController } from "./controller/TicketController"
import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/eventful/event/getallevents",
    controller: EventController,
    action: "getAll"
}, {
    method: "get",
    route: "/eventful/event/getevent/:id",
    controller: EventController,
    action: "getOne"
}, {
    method: "get",
    route: "/eventful/user/getallusers",
    controller: UserController,
    action: "getAll"
}, {
    method: "get",
    route: "/eventful/user/getuser/:id",
    controller: UserController,
    action: "getOne"
}, {
    method: "post",
    route: "/eventful/user/adduser",
    controller: UserController,
    action: "save"
}, {
    method: "post",
    route: "/eventful/ticket/buyticket",
    controller: TicketController,
    action: "save"
}/*, {
    method: "delete",
    route: "/users/:id",
    controller: EventController,
    action: "remove"
}*/]