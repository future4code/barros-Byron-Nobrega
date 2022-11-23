import { app } from "./app";
import { getAllUsers} from "./endpoints/getAllUsers";
import {getAllUsersName} from "./endpoints/getAllUsersName";
import {getAllUsersType} from "./endpoints/getAllUsersType";
import {getAllUsersOrder} from "./endpoints/getAllUsersOrder";
import {getAllUsersOffset} from "./endpoints/getAllUsersOffset";

app.get("/users", getAllUsers)
app.get("/users/name", getAllUsersName)
app.get("/users/type", getAllUsersOrder)
app.get("/users/:type", getAllUsersType)
app.get("/users/page/:offset", getAllUsersOffset)