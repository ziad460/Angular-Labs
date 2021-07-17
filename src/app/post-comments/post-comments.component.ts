import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/Services/comments.service';
import { IComments } from '../Shared/Shared';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {

  allComments:IComments[] = [];
  commentId:any ;

  increaseTax$ = new BehaviorSubject(this.allComments);
  constructor(private posts:CommentsService , private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.commentId = this.route.snapshot.paramMap.get("id");

    console.log(this.commentId);

    this.posts.getComments().subscribe(
      data => { this.allComments = data; },
      errorMsg => { alert(errorMsg); } )
  }
}
