const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Kode konfigurasi MongoDB dan model-modelnya di sini

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
