import express from "express";
const router = express.Router();
import { uploadPicture } from "../middleware/uploadPictureMiddleware.js";

import { 
    registerUser, 
    loginUser, 
    userProfile,
    updateProfile,
    updateProfilePicture,
} from "../controllers/userControllers.js";
import { authGuard } from '../middleware/authMiddleware.js';

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authGuard, userProfile);
router.put('/updateProfile', authGuard, updateProfile);
router.put('/updateProfilePicture', authGuard, updateProfilePicture);

export default router;