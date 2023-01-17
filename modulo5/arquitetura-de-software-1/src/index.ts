
import { app } from "./app"
import { UserController } from "./controller/UserController"



const userController = new UserController()

app.post('/createUser', userController.createUser)
app.put('/user/:id', userController.deleteUser)
app.get('/all', userController.findUser)



