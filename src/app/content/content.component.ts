import { Component, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StoryService } from 'src/app/services/story.service'
import { Story } from 'src/app/model/story';
import { Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { StoryComponent } from '../story/story.component';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs-compat/operators/map';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  storyForm: FormGroup;
  stories$: Observable<Story[]>;
 
  constructor(
      private http: HttpClient, 
      private storyService: StoryService, 
      private db: AngularFirestore) {}

  ngOnInit() {
    this.stories$ = this.db 
      .collection('stories')
      .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            date: doc.payload.doc.data()['date'],
            title: doc.payload.doc.data()['title'],
            content: doc.payload.doc.data()['content'],
            author: doc.payload.doc.data()['author']
          };
        });
      }))
     
    this.storyForm = new FormGroup({
      story_content: new FormControl("", Validators.minLength(10)),
      date: new FormControl(new Date())
    });
  }

  updateForm() {
    this.storyForm = new FormGroup({
      story_content: new FormControl("", Validators.minLength(10)),
      date: new FormControl(new Date())
    });
  }

  onSubmit(): void {
    // this.storyService.saveStory(this.storyForm.value).subscribe(
    //   (val) => {
    //     this.myStories$.push(JSON.parse(val))
    //   }

    // );
    this.updateForm();
  }

}
