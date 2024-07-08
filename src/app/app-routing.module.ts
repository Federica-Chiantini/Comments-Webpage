import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { SingleCommentComponent } from './components/single-comment/single-comment.component';
import { NewCommentComponent } from './components/new-comment/new-comment.component';


const routes: Routes = [
  {path: "" , component: HomepageComponent},
  {path: "comments" , component: CommentsListComponent},
  {path: "comments/new" , component: NewCommentComponent},
  {path: "comments/:id" , component: SingleCommentComponent},
  {path: "comments/group/:postId" , component: SingleCommentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
