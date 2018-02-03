const express = require('express');
const router = express.Router();

/*
 * Controller references
 */
const Homepage = require('../app/http/controllers/Homepage');


/*
 * Middleware references
 */
const example_middleware = require('../app/http/middleware/example_middleware');




const models = require('../database/models');

	   



/*
 * Routes
 */

// GET home page.
router.get('/', example_middleware.example, Homepage.index);

router.get('/db', (req, res)=>{

	models.User.findAll()
		.then((users) => {
			res.send(users);
		});

	  
});




module.exports = router;
