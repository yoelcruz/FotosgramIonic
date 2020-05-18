"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    created: {
        type: Date
    },
    mensaje: {
        type: String
    },
    imgs: [{
            type: String
        }],
    coords: {
        type: String //longitud, latitud
    },
    usuario: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'Debe de existir una referencia a un usuario']
    }
});
//Tiene que ser una funcion normal, (no puede ser una función de flecha)
postSchema.pre('save', function (next) {
    this.created = new Date();
    next();
});
exports.Post = mongoose_1.model('Post', postSchema);
