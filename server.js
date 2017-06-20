var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 3000,
    app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/public/dist")))

var connection = mongoose.connect("mongodb://localhost/notes");

mongoose.Promise = global.Promise

var NoteSchema = new mongoose.Schema({
    content: String,
},{timestamps: true});


var Note = mongoose.model('Note', NoteSchema);

app.post("/newnote", function(req, res){
    console.log("creating note")
    var note = new Note({content: req.body.content})
    note.save(function(err) {
        if(err) {
            console.log('error found when creating new item')
        }
        else {
            console.log("we created a note",note)
            res.json(note)
        }
        
    })
}
    
)

app.get('/getall', function(req, res) {
    console.log("getting all")
    Note.find({}, function(err, notes) {
        console.log("found the notes",notes)
        res.json(notes)
    })
})






app.listen(3000, function() {
 console.log("listening on port 3000!");
})