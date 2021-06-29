import express from 'express'
const router = express.Router()
import { signin, signup, updateUser, deleteUser,getUserProfile, signout } from '../Controllers/userController.js'
import { auth } from '../Middlewares/auth.js'

router.post('/signin',signin)

router.post('/signup',signup)

// router.get('/userprofile/:id',auth, userprofile)

router.put('/userprofile/update/:id',auth, updateUser)

router.delete('/userprofile/delete/:id',auth, deleteUser)

router.get('/getuserprofile', auth, getUserProfile)

router.get('/signout', auth, signout)
export default router
