import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
const nodemailer = require('nodemailer');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');




// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/mitro/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);
  server.use(fileUpload());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));




  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'troc.piotr@gmail.com',
      pass: 'piterr56',
    }
  });


  const createMailOptinToMitro = ({firstName, lastName, email, message, woj, tel}, attachments) => ({
    from: 'troc.piotr@gmail.com' + ', ' +  process.env.MAIL_LOGIN1,
    to: 'troc.piotr@gmail.com' + ', ' +  process.env.MAIL_LOGIN1,
    subject: `Wiadomośc od ${firstName} ${lastName}`,
    text: `Wiadomośc od ${firstName} ${lastName}`,
    html: `
    <!DOCTYPE html>
    <html>
    <head>
    <style  type="text/css">
    body {margin: 0; padding: 0; min-width: 100%!important;}
    </style>
    </head>
    <body>
    <div style="margin-left: 10%">
    <p>Wiadomość od ${firstName} ${lastName}</p>
    <p>telefon: ${tel}</p>
    <p>email: ${email}</p>
    <p>Województwo:  ${woj}</p>
    <hr style='border: none; border-top: 1px dashed #b0b0b0;   background: repeating-linear-gradient(90deg,#000,#000 6px,transparent 6px,transparent 12px);'>
    <div style='color: blue; opacity:0.7'>
    ${message}
    </div>
    <hr style='border: none; border-top: 1px dashed #b0b0b0;  background: repeating-linear-gradient(90deg,#000,#000 6px,transparent 6px,transparent 12px);'>
    </div>
    </body>
    </html> `,
    attachments

  });


  const createMailOptinFromMitro = ({firstName, lastName, email, message}) => ({
    from: 'jaaaaa ',
    to: 'troc.piotr@gmail.com ',
    subject: ' Mitro Sp. z o.o.',
    text: 'Dziękuję za wiadomość',
    html: `
    <!DOCTYPE html>
    <html>
      <head>
      <style  type="text/css">
      body {margin: 0; padding: 0; min-width: 100%!important;}
      </style>
      </head>
      <body>
        <div style="margin-left: 10%">
          <img src='cid:Logo.png' style='width:50%; height:50%'/>
          <p>Witaj ${firstName} ${lastName}!</p>
          <p>Dziękuję za wiadomość</p>
          <p>W najblizszym czasie odpowiemy na twoją wiadomość</p>
          <p>Z pozdrowieniami Zespół MITRO</p>
          <a href='https://mitro.com.pl'>MITRO Sp. z o.o.</a>
        </div>
      </body>
    </html>
    `,
    attachments : [{
      filename: 'ulotka.pdf',
      path: distFolder + '/' + 'ulotka.pdf',
      contentType: 'application/pdf',
      cid: 'ulotka.pdf'
    },
    {
      filename: 'Logo.png',
      path: distFolder + '/' + 'Logo.png',
      cid: 'Logo.png'
    }]
  });

  const sendMailToMitro = (options, attachments) => {
    const opt = options;
    opt.attachments = attachments;
    console.log(opt);
    transporter.sendMail(opt, (error, info) => {
      if (error) {
        console.log('errrrrrrrr', error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };

  const sendMailFromMitro = (options) => {
    transporter.sendMail(options, (error, info) => {
  if (error) {
   console.log(error);
  } else {
   console.log('Email sent: ' + info.response);
  }
  });
  };



  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  let attachments1 = [];
  let mailBody;

  server.post('/users', (req: any, res: any) => {




    if (req.files) {
      // console.log(req);
      const f = req.files['download'];
      f.mv(distFolder + '/' + f.name, (e) => {});
      const att = {
            filename: f.name,
            path: distFolder + '/' + f.name,
            cid: f.name
           };

      attachments1.push(att);
    }
    console.log('req.body', req.body);

    if (req.body){
      if (req.body.firstName) {mailBody = req.body; }

      if (req.body.ok){
        console.log('distFolderaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', distFolder);
        sendMailFromMitro(createMailOptinFromMitro(mailBody));
        sendMailToMitro(createMailOptinToMitro(mailBody, attachments1), attachments1);
        attachments1 = [];
      }
      res.send({dziala: 'ok'});
    }


  });


  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
