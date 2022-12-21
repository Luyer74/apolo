const mongoose = require('mongoose');

const paqueteSchema = mongoose.Schema({
  Paquete: String,
  Informacion: [
    {
      Subida: Number,
      Bajada: Number,
      Metodo: String,
      TiempoInstalacion: String,
      Precio: Number,
    },
  ],
});

const Plans = mongoose.model('Projects', paqueteSchema, 'Projects');
module.exports = Plans;
