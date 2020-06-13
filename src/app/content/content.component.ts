import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/model/story';
import { StoryService } from 'src/app/services/story.service';
import { Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  stories$: Observable<Story[]>;
 
  constructor(
      private http: HttpClient, 
      private storyService: StoryService, 
      private db: AngularFirestore
  ) { }

  ngOnInit(){
    this.stories$ = this.storyService.loadStories();
  }


}
