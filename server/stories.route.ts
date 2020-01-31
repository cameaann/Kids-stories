import { Request, Response } from 'express';
import { STORIES } from '../src/db-stories';
import { from } from 'rxjs';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';


const fs = require('fs');
const shortid = require('shortid');
const async = require('async');


export function getAllStories(req: Request, res: Response) {

    function loaddir(path, callback) {
        fs.readdir(path, (err, files) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Ooops something's getting wrong...");
            }
            var files_array = [];
            var count = files.length;
            async.series([
                files.forEach((element, index) => {
                    fs.readFile(`server/stories-db/${element}`, 'utf8', (err, data) => {
                        if (err) {
                            callback(err);
                            return;
                        }
                        var story = JSON.parse(data);
                        files_array[index] = story;
                        count--;
                        if (count === 0) {
                            files_array.sort(sortFunction);
                            callback(null, files_array);
                        }
                    });
                })                
            ]);
            
        });
    }

    loaddir('server/stories-db', function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).send("Ooops something's getting wrong...");
        }
        console.dir(result);
        return res.status(200).json(result);
    });

    function sortFunction(a,b){  
        var dateA = new Date(a.date).getTime();
        var dateB = new Date(b.date).getTime();
        return dateA < dateB ? 1 : -1;  
    }; 


}

export function saveStory(req: Request, res: Response) {

    var story = JSON.stringify(req.body);

    fs.writeFile(`server/stories-db/story_${shortid.generate()}.json`, story, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Story wasn't written to file");
        }

        console.log("Story was written to file");
         return res.status(200).json(story);
    });

}