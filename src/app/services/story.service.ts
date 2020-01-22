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
    return this.http.get<Story[]>('/api/stories');
  }

  saveStory(story: Story):Observable<any>{
    
    return this.http.post<Story>(`/api/stories`, story);
  
  }
  
}
