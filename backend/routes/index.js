import express from 'express';
import { login } from '../controller/login.js';

const router=express.Router();
router.post('/login',login);



export default router;