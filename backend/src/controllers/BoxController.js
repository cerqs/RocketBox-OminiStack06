const Box = require ('../models/box');

class BoxController{
    async store (request, response ){
        const box = await Box.create(request.body);
    
        return response.json(box);
    }

    async show (request, response ){
        const box = await Box.findById(request.params.id).populate({
            path: 'files',
            options: { sort: { createdAt: 1 }}
        });
    
        return response.json(box);
    }
}

module.exports = new BoxController();