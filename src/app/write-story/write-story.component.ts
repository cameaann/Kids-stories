import { Component, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StoryService } from 'src/app/services/story.service';
import { Story } from 'src/app/model/story';
import { Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { StoryComponent } from '../story/story.component';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs-compat/operators/map';

@Component({
  selector: 'app-write-story',
  templateUrl: './write-story.component.html',
  styleUrls: ['./write-story.component.scss']
})
export class WriteStoryComponent implements OnInit {
  storyForm: FormGroup;
  stories$: Observable<Story[]>;
 
  constructor( private http: HttpClient, 
    private storyService: StoryService, 
    private db: AngularFirestore) { }

  ngOnInit(){
      this.storyForm = new FormGroup({
      author: new FormControl(""),
      title: new FormControl(""),
      content: new FormControl("", Validators.minLength(10)),
      date: new FormControl(new Date()),
    });
  }

  updateForm() {
    this.storyForm = new FormGroup({
      author: new FormControl(""),
      title: new FormControl(""),
      content: new FormControl("", Validators.minLength(10)),
      date: new FormControl(new Date()),

    });
  }

  onSubmit(): void {
    this.storyService.saveStory(this.storyForm.value);
    this.updateForm();
  }

}
