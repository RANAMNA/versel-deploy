// routes/proposal.routes.js

import express from 'express';
import { createProposal, respondToProposal } from '../controllers/proposalController.js';

const router = express.Router();

router.post('/', createProposal);
router.put('/:id', respondToProposal);

export default router;
