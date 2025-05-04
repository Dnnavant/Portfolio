import { Router } from 'express';
import { handleAdminContacts } from '../controllers/admin';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/contacts', requireAuth, handleAdminContacts);

export default router; 