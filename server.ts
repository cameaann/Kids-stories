import * as express from 'express';
import {Application} from "express";
import {getAllStories} from './server/get-stories.route';
import {saveStory} from './server/save-story.route';


const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
  });

app.route('/api/stories').get(getAllStories);

// app.route('/api/stories/:id').put(saveStory);



const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
