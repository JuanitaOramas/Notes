//server
// escucha eventos de websockets
// puede enviar o escuchar eventos 
const Note = require('./models/Note');
const { emit } = require('./models/Note');
const noteSchema = require('./models/Note');


module.exports = function(io) {
    // on => escucha determinado evento
    // emit => ejecuta determinado evento

    
    // se tiene un parametro socket porque io retorna un objeto
    io.on('connection', (socket) => {

        // consulta todas las notas        
        const emitNotes = async () => {
            // await espera que se cumpla la promesa
            // (en este caso que retorne los datos de la db)
            const notes = await noteSchema.find()
            
            // emite el evento al cliente cuando se conecta
            io.emit("server:loadnotes", notes)
            // io => envia a todos los clientes
            // socket => envia a solo un cliente
        }
        emitNotes();

        // escucha evento newnote el cual se envia al cliente y va a traer un objeto con los datos de title, description
        socket.on("client:newnote", async data => {
            const  newNote = new noteSchema(data);
            const  saveNote =await newNote.save();
            //console.log();
            io.emit('server:newnote', saveNote)
        });
        
        // console.log(socket.handshake); // direccion de conexion info
        socket.on("client:deletenote", async (id) => {
            await noteSchema.findByIdAndDelete(id);
            emitNotes();
        })

        socket.on('client:getnote', async id =>{
            const note = await noteSchema.findById(id);
            io.emit('server:selectedNote', note)
            console.log(note);
        })

        socket.on('client:updateNote', async (updatedNote)=> {
            await noteSchema.findByIdAndUpdate(updatedNote._id, {
                title: updatedNote.title,
                description: updatedNote.description
            })
            emitNotes();
        })

       

    
        
    });


};