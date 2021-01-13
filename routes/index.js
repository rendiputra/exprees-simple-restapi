import express from 'express';
const  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Rendi Putra Pradana' });
  res.send("Belajar Membuat REST API dengan Express itu menyenangkan.");
});

router.get('/qwe', function(req, res, next) {
  res.render('index', { title: 'Rendi Putra Pradana' });
  // res.send("Belajar Membuat REST API dengan Express itu menyenangkan.");
});

export default router;