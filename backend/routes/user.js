import express from "express";
import {getUser,getFriends,addRemoveFriends} from '../controller/user.js';
import VerifyToken from '../middleware/auth.js'

const router=express.Router();


router.get('/:id'.VerifyToken,getUser);
router.get(/:id/friends,VerifyToken,getFriends)
router.patch('/:id/:friendId',VerifyToken,addRemoveFriends)


export default router;

