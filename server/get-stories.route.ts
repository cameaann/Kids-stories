import {Request, Response} from 'express';
import {STORIES} from '../src/db-stories';

export function getAllStories(req: Request, res: Response){
    res.status(200).json(Object.values(STORIES));
}

export function getStoryById(req: Request, res: Response){

    const storyId = req.params['id'];
    const stories: any = Object.values(STORIES);

    const story = stories.find(story => story.id == storyId);
    res.status(200).json(story);
}