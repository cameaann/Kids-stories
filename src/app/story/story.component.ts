import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/model/story';
import { StoryService } from '../services/story.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  
  @Input()
  story:Story;


  constructor(private storyService: StoryService) { }

  ngOnInit() {

    // console.log(this.storyService)
    // console.log(this.story);
  }
  edit(){
    
  }

  delete(){

  }

}
