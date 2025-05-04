import { Router } from 'express';
import { handleContact } from '../controllers/contact';

const router = Router();

router.post('/', handleContact);

export default router; 