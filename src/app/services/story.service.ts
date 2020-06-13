import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Story } from '../model/story';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs-compat/operators/map';


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  stories: Observable<Story[]>

  constructor(private http: HttpClient,
              private db: AngularFirestore) { }

  loadStories(): Observable<Story[]>{
       this.stories = this.db 
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
    return this.stories;
  }

  saveStory(story: Story){
    this.db.collection('stories').add(story);    
  }
  
}
