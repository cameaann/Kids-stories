import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PostsService } from 'src/app/services/story.service'
import { Story } from 'src/app/model/story';
import { StoryComponent } from '../story/story.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  storyForm: FormGroup;

  stories = [];
  
  constructor(private PostsService: PostsService) { }

  ngOnInit() {
    this.storyForm = new FormGroup({
      storyContent: new FormControl("", Validators.minLength(10))
    });
  }

  onSubmit(): void{

    this.stories.push(this.storyForm.value);
    var storyDate = new Date();
    console.log(storyDate);
    console.log(this.stories);
    console.log(this.storyForm.value);
  }

}
