import {Request, Response} from 'express';
import {findStoryById} from '../src/db-stories';

export function saveStory(req: Request, res: Response){
    const id = req.params["id"],
          changes = req.body;

    console.log("Saving story", id, JSON.stringify(changes));

    const story = findStoryById(id);

    story.content = changes.content;

    res.status(200).json(story);
}