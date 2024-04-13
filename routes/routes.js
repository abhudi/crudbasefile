import express from 'express'
import { Createuser } from '../controller/UserController.js'
import { GetUser } from '../controller/UserController.js'
import { UpdateUser } from '../controller/UserController.js'
import { DeleteUser } from '../controller/UserController.js'
const routers = express.Router()

routers.post('/create',Createuser)
routers.get('/get',GetUser)
routers.put('/update/:id',UpdateUser)
routers.delete('/delete/:id',DeleteUser)

export default routers