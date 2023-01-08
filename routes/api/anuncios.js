'use strict';

const express = require('express')
const createError = require('http-errors');
const Anuncio = require('../../models/Anuncio');

const router = express.Router()

// Lista de anuncios
router.get('/', async (req, res, next) => {
    try {
  
      // filtros
      const nombre = req.query.nombre;
      const venta = req.query.venta;
      const precio = req.query.precio;
      const tags = req.query.tags;

      // paginación
      const skip = req.query.skip;
      const limit = req.query.limit;

      // selección de campos
      const fields = req.query.fields; // /api/anuncios?fields=tags -_id
      
      // ordenación
      const sort = req.query.sort; // /api/anuncios?sort=precio
  
      const filtro = {};
  
      if (tags) { // /api/anuncios?tags=motor
        filtro.tags = tags;
      }
  
      if (venta) { // /api/anuncios?venta=false
        filtro.venta = venta;
      }

      if (precio) { // /api/anuncios?precio=50.00
        filtro.precio = precio;
      }

      if (nombre) { // /api/anuncios?nombre=v
        filtro.nombre = new RegExp('^' + req.query.nombre, "i");
        
      }
  
  
      const anuncios = await Anuncio.lista(filtro, skip, limit, fields, sort);
      res.json({ results: anuncios });
    } catch(err) {
      next(err);
    }
  });

  
// Crear un agente
router.post('/', async (req, res, next) => {
    try {
  
      const anuncioData = req.body;
  
      // instanciar un nuevo agente en memoria
      const anuncio = new Anuncio(anuncioData);
  
      // guardar en la base de datos
      const anuncioSave = await anuncio.save();
  
      res.json({ result: anuncioSave });
  
    } catch (err) {
      next(err);
    }
  });

module.exports = router;

