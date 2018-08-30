const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare()
  .then(() => {
    const server = express();

    server.use(cookieParser(),express.static('assets'));
  
    server.get('/organizationInfo', (req, res) => {
      if(!req.cookies.user) {
        res.redirect('/organizationInfo');
      } else {
        return app.render(req, res, '/organizationInfo', req.query);
      }
    });


    server.get('/signup', (req, res) => {
      if(req.cookies.token) {
        res.redirect('/');
      } else {
        return app.render(req, res, '/signup', req.query);
      }
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });