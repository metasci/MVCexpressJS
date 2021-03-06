'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
	  return queryInterface.bulkInsert('Users', [
		  {
			  first: 'John',
			  last: 'Doe',
			  email: 'demo@demo.com'
		  },{
			  first: 'Jane',
			  last: 'Doe',
			  email: 'demo@demo.com'
		  },{
			  first: 'Billy',
			  last: 'James',
			  email: 'billymail@demo.com'
		  }
	  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
	  return queryInterface.bulkDelete('Users', null, {});
  }
};
