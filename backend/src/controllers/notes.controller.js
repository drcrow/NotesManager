const notesCtrl = {};
notesCtrl.getNotes = (req, res) => res.json( { message: 'Get Request' } );
notesCtrl.getNote = (req, res) => res.json( { message: 'Get Request' } );
notesCtrl.createNote = (req, res) => res.json( { message: 'Post Request' } );
notesCtrl.updateNote = (req, res) => res.json( { message: 'Get Request' } );
notesCtrl.deleteNote = (req, res) => res.json( { message: 'Get Request' } );

module.exports = notesCtrl;