// controllers/proposalController.js

import Proposal from '../models/Proposal.model.js';

// Controller to create a proposal
export const createProposal = async (req, res) => {
  try {
    const { content, userId } = req.body;
    const newProposal = await Proposal.create({ content, userId });
    res.status(201).json(newProposal);
  } catch (error) {
    console.error('Error creating proposal:', error);
    res.status(500).json({ error: 'Unable to create proposal' });
  }
};

// Controller to respond to a proposal (accept or reject)
export const respondToProposal = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedProposal = await Proposal.findByIdAndUpdate(
      id,
      { status, adminId: req.user.id },
      { new: true }
    );
    res.status(200).json(updatedProposal);
  } catch (error) {
    console.error('Error responding to proposal:', error);
    res.status(500).json({ error: 'Unable to respond to proposal' });
  }
};
