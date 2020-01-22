  export const STORIES: any = [{
    id: 1,
    date: '22/12/2019',
    title:"What does creativity mean?",
    content: "What does creativity mean?"
    
  },
  {
    id: 2,
    date: '23/12/2019',
    title:"What does creativity mean?",
    content: "Lorem ipsum dolor sit, amet consectetur ue voluptas maxime?"
  }

];

export function findStoryById(storyId:number){
  return STORIES.find(story => story.id == storyId);
}
