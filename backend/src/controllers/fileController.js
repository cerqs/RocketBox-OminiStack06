const File = require ('../models/file');
const Box = require ('../models/box');

class FileController{
    async store (request, response ){
        //OBJ instanciado
        const box = await Box.findById(request.params.id);
        
        
        const file = await File.create({
            title: request.file.originalname,
            path: request.file.key
        });

        box.files.push(file);

        await box.save();

        //avisa em tempo real que foi criado um arquivo
        request.io.sockets.in(box._id).emit('file', file);

        return response.json(file)
    }   
}

module.exports = new FileController();