import express from 'express';
// import { likePost } from '../../client/src/api/index.js';
// import { deletePost } from '../../client/src/api/index.js';

const router = express.Router();

import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)// patch to update the existing documents
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)


export default router