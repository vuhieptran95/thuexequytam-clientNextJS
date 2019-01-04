const Default = require("./helper/Default.jsx");
const express = require("express");
const next = require("next");
// console.log(process.env.NODE_ENV);
// const dev = process.env.NODE_ENV !== "production";
const dev = false;
// console.log(dev);
const app = next({ dev });
const handle = app.getRequestHandler();
const compression = require("compression");

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());

    server.get("/p/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get(`/${Default.urlType}/:id/:name`, (req, res) => {
      const actualPage = "/details/type-details";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get(`/${Default.urlCar}/:id/:name`, (req, res) => {
      const actualPage = "/details/car-details";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    if (dev) {
      server.listen(process.env.PORT || 3000, () => console.log("Server started port 3000 dev mode"));
    } else {
      server.listen(process.env.PORT || 8000, () => console.log("Server started port 8000 production mode"));
    }
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
