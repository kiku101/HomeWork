const express = require('express');
const router = express.Router();
const validate = require('../app/middleware/validate');

const postController = require('../app/controllers/PostController');

router.get('/new',postController.createPost);
router.post('/store',validate,postController.store);
router.post('/delete/:id',postController.delete);
router.get('/:id',postController.show);


module.exports = router;