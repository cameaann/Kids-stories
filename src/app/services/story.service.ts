import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../model/story';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) { }

  loadStories(): Observable<Story[]>{
    const params = new HttpParams()
    .set("page", "1")
    .set("pageSize", "10");

    return this.http.get<Story[]>('/api/stories', {params});
  }

  saveStory(story: Story){

    // const headers = new HttpHeaders()
    // .set("X-Auth", "userId")
    // return this.http.put(`/api/posts/${post.id}`,
    // post, {headers})
  }
  
}
