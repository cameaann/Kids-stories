  export const STORIES: any = [{
    id: 1,
    date:'22.12.2019',
    title:"What does creativity mean?",
    content: "We like people to stay consistent for a simple reason: It is easy for us. When people stick to their opinions they are more predictable. And guess what: they want you to be consistent as well! So all your thoughts about life and the world in general should ideally never contradict each other."
    
  },
  {
    id: 2,
    date:'23.12.2019',
    title:"What does creativity mean?",
    content: "Lorem ipsum dolor sit, amet consectetur ue voluptas maxime?"
  }

];

export function findStoryById(storyId:number){
  return STORIES.find(story => story.id == storyId);
}