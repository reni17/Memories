import express from 'express'
import { getPosts, createPosts, updatePost, deletePost, likePost} from '../controllers/postController.js'

const router = express.Router()

router.post('/', createPosts)
router.get('/', getPosts)
router.patch('/:id',updatePost )
router.delete('/:id',deletePost )
router.patch('/:id/likePost', likePost)

export default router