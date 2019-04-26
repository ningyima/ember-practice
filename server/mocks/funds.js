'use strict';

module.exports = function(app) {
  const express = require('express');
  let fundsRouter = express.Router();

  fundsRouter.get('/', function(req, res) {
    res.send({
      'funds': [{
        "model": "fund",
        "pk": "FB0120000",
        "fields": {
          "title": "Lawrence Hall of Science Fund"
        }
      },
      {
        "model": "fund",
        "pk": "FB0194000",
        "fields": {
          "title": "Children's Scholarship Fund"
        }
      },
      // {
      //   "model": "fund",
      //   "pk": "FB0220000",
      //   "fields": {
      //     "title": "The Fund for I-House"
      //   }
      // },
      // {
      //   "model": "fund",
      //   "pk": "FB0231000",
      //   "fields": {
      //     "title": "SETI@home"
      //   }
      // },
      // {
      //   "model": "fund",
      //   "pk": "FB0320000",
      //   "fields": {
      //     "title": "The Botanical Garden Annual Fund"
      //   }
      // },
      // {
      //   "model": "fund",
      //   "pk": "FB0430000",
      //   "fields": {
      //     "title": "The Phi Beta Kappa Graduate Fellowship"
      //   }
      // },
      // {
      //   "model": "fund",
      //   "pk": "FB0510000",
      //   "fields": {
      //     "title": "Oral History Center"
      //   }
      // },
      // {
      //   "model": "fund",
      //   "pk": "FB0515000",
      //   "fields": {
      //     "title": "The Women Leaders at Berkeley Fund"
      //   }
      // },
      // {
      //   "model": "fund",
      //   "pk": "FB0519000",
      //   "fields": {
      //     "title": "The University Library Digitization Fund"
      //   }
      // },
      // {
      //   "model": "fund",
      //   "pk": "FB0528000",
      //   "fields": {
      //     "title": "Fund for the Chemistry Library"
      //   }
      // },
      // {
      //   "model": "fund",
      //   "pk": "FB0539000",
      //   "fields": {
      //     "title": "Moffitt Library Collection Fund"
      //   }
      // }
      ]
    });
  });

  fundsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  fundsRouter.get('/:id', function(req, res) {
    res.send({
      'funds': {
        id: req.params.id
      }
    });
  });

  fundsRouter.put('/:id', function(req, res) {
    res.send({
      'funds': {
        id: req.params.id
      }
    });
  });

  fundsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/funds', require('body-parser').json());
  app.use('/api/funds', fundsRouter);
};
