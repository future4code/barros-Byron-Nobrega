import app from "./controller/app"
import { userRouter } from "./controller/router/userRouter"



/**************************** ENDPOINTS ******************************/
app.use('/signup', userRouter);
app.use('/login', userRouter);
app.use('/user', userRouter);





