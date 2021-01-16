import express from 'express'

const router = express.Router();
// import models
const models = require('../models/index');


/**
 * Route untuk mengambil semua data artikel
 * Endpoint (GET): http://localhost:3000/posts
 */
router.get('/', async function(req, res, next) {
  // res.send('router posts');
  try{
    // mengambil semua data dari tabel posts | sama seperti (SELECT * FROM posts)
    const posts = await models.posts.findAll({});

    // memeriksa apakah terdapat data
    if (posts.length !== 0){
      res.json({
        'status': 'OK',
        'messages': '',
        'data': posts
      });
    }else{
      res.json({
        'status': 'EMPTY',
        'messages': 'Data is empty | Data Kosong',
        'data': {}
      });
    } 
  
  // apabila terjadi error
  }catch (err) {
    res.status(500).json({
      'status': 'ERROR',
      'messages': 'Internal Server Error | Terjadi Kesalahan Pada Server'
    });
  }
  
});

/**
 * Route untuk mengambil artikel berdasarkan ID
 * Endpoint (GET): http://localhost:3000/posts/{id}
 */
router.get('/:id',async function(req, res, next) {
	  try {
      // menangkap parameter "ID"
      const id = req.params.id;
      const post = await models.posts.findByPk(id);

      // memeriksa apakah terdapat data
      if(post) {
        res.json({
          'status': 'OK',
          'messages': '',
          'data': post
        });
      } else {
        res.status(404).json({
          'status': 'NOT FOUND',
          'messages': 'Data not found | Data tidak ditemukan',
          'data': null
        });
      }
      
    // apabila terjadi error
    } catch(err) {
      res.status(500).json({
        'status': 'ERROR',
        'messages': 'Internal Server Error | Terjadi Kesalahan Pada Server'
      })
    }
});

/**
 * Route untuk membuat artikel baru
 * Endpoint (POST): http://localhost:3000/posts
 */
router.post('/', async function(req, res, next) {
	  try {
      // menerima form data yang dikirim melalu request body
      const {
        title,
        content,
        tags,
        published
      } = req.body;

      // membuat data baru di database menggunakan method create()
      const post = await models.posts.create({
        title,
        content,
        tags,
        published
      });

      // jika data berhasil dibuat, maka akan mengembalikan rensponse dengan kode 201 dan status OK
      if(post){
        res.status(201).json({
          'status': 'OK',
          'messages': 'Success | Post berhasil ditambahkan',
          'data': post
        });
      }
      
    // apabila terjadi error
    }catch(err) {
      res.status(400).json({
        'status': 'ERROR',
        'messages': err.messages
      });
    }
});

/**
 * Route untuk mengupdate artikel berdasarkan ID
 * Endpoint (PUT): http://localhost:3000/posts/{id}
 */
router.put('/:id', async function(req, res, next) {
	  try {
      
      const id = req.params.id;
      const {
        title,
        content,
        tags,
        published
      } = req.body;

      const update = models.posts.update({
        title,
        content,
        tags,
        published
      }, {
        where: {
          id: id
        }
      });

      if(update){
        res.json({
          'status': 'OK',
          'messages': 'Success | Post berhasil di update'
        })
      }
      
    } catch(err) {
      res.status(400).json({
        'status': 'ERROR',
        'messages': err.messages
      });
    }


});

/**
 * Route untuk menghapus artikel berdasarkan ID
 * Endpoint (DELETE): http://localhost:3000/posts/{id}
 */
router.delete('/:id', function(req, res, next) {
	  try{
      const id = req.params.id;
      const post = models.posts.destroy({
        where: {
          id: id
        }
      });

      if(post) {
        res.json({
          'status': 'OK',
          'messages': 'Success | Post berhasil dihapus'
        });
      }
      
    } catch(err){
      res.status(400).json({
        'status': 'ERROR',
        'messages': err.messages
      });
    }
});

export default router;