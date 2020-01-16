import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  loadPosts(): Observable<Post[]>{
    const params = new HttpParams()
    .set("page", "1")
    .set("pageSize", "10");

    return this.http.get<Post[]>('/api/posts', {params});
  }

  savePost(post: Post){

    // const headers = new HttpHeaders()
    // .set("X-Auth", "userId")
    // return this.http.put(`/api/posts/${post.id}`,
    // post, {headers})
  }
  
}
