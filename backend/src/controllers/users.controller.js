const usersCtrl = {};
usersCtrl.getUsers = (req, res) => res.json( { message: 'Get Request' } );
usersCtrl.createUser = (req, res) => res.json( { message: 'Post Request' } );
usersCtrl.deleteUser = (req, res) => res.json( { message: 'Get Request' } );

module.exports = usersCtrl;