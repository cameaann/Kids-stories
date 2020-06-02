import { Component, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { StoryService } from 'src/app/services/story.service'
import { Story } from 'src/app/model/story';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { StoryComponent } from '../story/story.component';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  storyForm: FormGroup;
  stories$: Observable<Story[]>;
  myStories$ = [];
  items: Observable<any[]>;
  
  constructor(private http: HttpClient, private storyService: StoryService, firestore: AngularFirestore) {
    this.items = firestore.collection('users').valueChanges();
    console.log(this.items);
   }
 
  ngOnInit() {
    this.stories$ = this.storyService.loadStories();    
    this.stories$.subscribe(val => console.log(val));

    this.storyForm = new FormGroup({
      story_content: new FormControl("", Validators.minLength(10)),
      date: new FormControl(new Date())
    });
  }

  updateForm(){
    this.storyForm = new FormGroup({
      story_content: new FormControl("", Validators.minLength(10)),
      date: new FormControl(new Date())
    });
  }

  onSubmit(): void{
    this.storyService.saveStory(this.storyForm.value).subscribe(
      (val) => {
        this.myStories$.push(JSON.parse(val))
      }
      
    );
   this.updateForm();
  }

}
