import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';



@NgModule({
  declarations: [
    PostComponent,
    CommentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeedModule { }
