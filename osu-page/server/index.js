import express, { application } from "express";
import bodyParser from "body-parser";

const app = express();

/* CONFIGURATIONS */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* ROUTES */


app.listen(3001);