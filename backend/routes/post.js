import express from 'express';
import { VerifyToken } from '../middleware/auth';

const router=express.Router();

router.get('/',VerifyToken,getFeedPosts);
router.get('/:userId/posts',VerifyToken,getUserDeedPosts);
router.patch("/:id/like",VerifyToken,likePost);

export default router;