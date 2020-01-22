import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { StoryService } from 'src/app/services/story.service'
import { Story } from 'src/app/model/story';
import { STORIES } from 'src/db-stories';
import { Observable } from 'rxjs';
import { StoryComponent } from '../story/story.component';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  storyForm: FormGroup;

  stories$: Observable<Story[]>;
  
  constructor(private http: HttpClient, private storyService: StoryService) { }

  ngOnInit() {
    this.stories$ = this.storyService.loadStories();    

    this.storyForm = new FormGroup({
      storyContent: new FormControl("", Validators.minLength(10)),
      date: new FormControl(new Date())
    });
  }

  onSubmit(): void{    
    this.storyService.saveStory(this.storyForm.value).subscribe(
      () => console.log("Story saved!")
    );
    // console.log(story);
    // console.log(this.storyForm.value);
  }

}
