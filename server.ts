import * as express from 'express';
import {Application} from "express";
import {getAllStories, saveStory} from './server/stories.route';



const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());


app.route('/api/stories').get(getAllStories);

app.route('/api/stories').post(saveStory);



const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
