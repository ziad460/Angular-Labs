import { Component, OnInit } from '@angular/core';
import { IPost } from '../Shared/Shared';
import { PostsServiceService } from 'src/Services/posts-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  allPosts:IPost[] = [];

  constructor(private posts:PostsServiceService , private router:Router) { }

  ngOnInit(): void {
    this.posts.getPosts().subscribe(
      data =>
      {
        this.allPosts = data;
      },
      errorMsg =>
      {
        alert(errorMsg);
      }
    )
  }
  goToComment(post:IPost)
  {
    this.router.navigate(['/posts' , post.id]);
  }
}
