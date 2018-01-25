


module.exports = {
	
	index: (req, res, next) => {
      // newTitle was added to req in example middleware
	  res.render('pages/index', { title: req.newTitle});
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
