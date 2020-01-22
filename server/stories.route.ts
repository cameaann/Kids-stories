import {Request, Response} from 'express';
import {STORIES} from '../src/db-stories';
import { from } from 'rxjs';


const fs = require('fs');
const shortid = require('shortid');


export function getAllStories(req: Request, res: Response){

    // array.forEach(element => {
        
    // });
    fs.readFile('server/stories-db/story2.json', 'utf8', (err, data)=>{
        if(err) {
            console.log(err);
            return res.status(500).send("Ooops something's getting wrong...");;
        }
        var story = JSON.parse(data);
        console.log(story);
        return res.status(200).json([story]);
      
    });
    
    

}

export function saveStory(req: Request, res: Response){
   
    var story = JSON.stringify(req.body);
    
    fs.writeFile(`stories-db/story_${shortid.generate()}.json`, story, function(err){
        if(err){
            console.log(err);
            return res.status(500).send("Story wasn't written to file");
        }
        
        console.log("Story was written to file");
        return res.status(200).json(story);
    });  

    // res.send(story);
    
 
}