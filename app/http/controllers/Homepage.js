


module.exports = {
	
	index: (req, res, next) => {
	  res.render('pages/index', { title: 'MVCexpressJS Framework'});
	},

	/*
	 * here only for unit example test
	 */
	alwaysTrue: () => true 
}
