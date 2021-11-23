// Forma convencional del ES6 => estándar convencional de JS
// import express from 'express';
// Forma sistema nativode Node Js
const express = require("express");

const router = express.Router();

// Importar el modulo de MongoDB => mongoose
const mongoose = require("mongoose");

let app = express();

app.use(router);

const productoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  descripcion: String,
  categoria: String,
});

const modelProducto = mongoose.model("nombre_coleccion", productoSchema);

// CRUD => CREATE
modelProducto.create(
  {
    id: 1,
    nombre: "Lomo res",
    cantidad: 12,
    categoria: "Carnes",
    precio: 20000,
  },
  (error) => {
    if (error) return console.log(error);
    console.log("Album creado");
  }
);

router.get("/metodoget", (req, res) => {
  res.send("Utilizando el método GET...");
});

router.post("/metodoget", (req, res) => {
  res.send("Utilizando el método POST... desde la ruta /metodoget");
});

router.post("/postmetodo", (req, res) => {
  res.send("Ruta /postmetodo... Utilizando el método POST...");
  const user = "admin-beate";
  const psw = "admin";
  const bd = "beate";
  const url = `mongodb+srv://${user}:${psw}@misiontic-uis-beate.yqqdx.mongodb.net/${bd}?retryWrites=true&w=majority`;

  mongoose
    .connect(url)
    .then(() => {
      console.log("Conexión a la base de datos establecida...");
    })
    .catch((err) => {
      console.log("Error al conectar a la base de datos...", err);
    });
});

app.listen(4000);
