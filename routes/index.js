import express from 'express';
const  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rendi Putra Pradana' });
});

router.get('/qwe', function(req, res, next) {
  res.render('index', { title: 'Ucok' });
});

export default router;