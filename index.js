const express = require('express');
const cors = require('cors');
const userRoutes = require('./userRoutes');
const connectDB = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

// Conexión a la base de datos
connectDB()
  .then(() => {
    console.log('Connected to MongoDB');
    // Iniciar servidor
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
