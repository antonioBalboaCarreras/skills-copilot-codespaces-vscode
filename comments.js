// crear servidor web
var express = require('express');
// cargar el modulo del controlador
var CommentController = require('../controllers/comment');
// cargar el router de express
var api = express.Router();
// cargar el middleware de autenticacion
var md_auth = require('../middlewares/authenticated');
// cargar multiparty
var multipart = require('connect-multiparty');
// cargar el middleware de subida de ficheros
var md_upload = multipart({ uploadDir: './uploads/comments' });
// crear rutas
api.post('/comment/topic/:topicId', md_auth.ensureAuth, CommentController.add);
api.put('/comment/:commentId', md_auth.ensureAuth, CommentController.update);
api.delete('/comment/:topicId/:commentId', md_auth.ensureAuth, CommentController.delete);

// exportar el modulo
module.exports = api;