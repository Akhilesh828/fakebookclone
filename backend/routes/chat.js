const express = require("express");
const { createChat, findChat, userChats } = require('../controllers/ChatController.js');
const router = express.Router()

router.post('/chat/', createChat);
router.get('/:userId', userChats);
router.get('/find/:firstId/:secondId', findChat);

module.exports = router;
