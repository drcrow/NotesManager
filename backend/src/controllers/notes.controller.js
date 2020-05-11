const notesCtrl = {};

const NoteModel = require( '../models/Note' );

notesCtrl.getNotes = async (req, res) => {
    const notes = await NoteModel.find();
    res.json( notes );
};

notesCtrl.getNote = async (req, res) => {
    const note = await NoteModel.findById( req.params.id );
    res.json( { note } );
};

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new NoteModel( {
        title: title,
        content: content,
        date: date,
        author: author
    } );
    await newNote.save();
    console.log(newNote);
    res.json( newNote );
};

notesCtrl.updateNote = async (req, res) => {
    const { title, content, author } = req.body;
    await NoteModel.findByIdAndUpdate( req.params.id, {
        title: title,
        content: content,
        author: author
    } );
    res.json( { message: 'Updated', id: req.params.id } );
};

notesCtrl.deleteNote = async (req, res) => {
    await NoteModel.findByIdAndDelete( req.params.id );
    res.json( { message: 'Deleted', id: req.params.id } );
};

module.exports = notesCtrl;