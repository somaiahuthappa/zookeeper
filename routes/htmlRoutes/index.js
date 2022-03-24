const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
  });
// wildcard route. any route that wasn't previously defined 
// will fall under this request and will receive the homepage as the response
// must come last

  // router.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../../public/index.html'));
  // });

  module.exports= router;