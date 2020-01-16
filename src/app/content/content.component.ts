import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service'
import { Post } from 'src/app/model/post';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  postForm: FormGroup;

  posts = [];
  
  constructor(private PostsService: PostsService) { }

  ngOnInit() {
    this.postForm = new FormGroup({
      postContent: new FormControl("", Validators.minLength(10))
    });
  }

  onSubmit(): void{

    var entry = new PostComponent();


    this.posts.push(this.postForm.value);
    var postDate = new Date();
    console.log(postDate);
    console.log(this.posts);
    console.log(this.postForm.value);
  }

}
