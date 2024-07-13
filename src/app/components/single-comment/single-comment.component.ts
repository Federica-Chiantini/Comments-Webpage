import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { DataComment } from '../../models/types';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrl: './single-comment.component.css'
})
export class SingleCommentComponent implements OnInit{
  Comment : DataComment[] = []

  constructor(private serviceSingle : CommentsService, private route : ActivatedRoute){}

  ngOnInit(): void {
    if(this.serviceSingle.postId){
      this.serviceSingle.postId = false;
      const Pid = this.route.snapshot.paramMap.get("postId")!
      this.serviceSingle.getGroupComments(+Pid).subscribe({next: (dati) => {this.Comment = dati}, error: (error : HttpErrorResponse)=>{console.log("errore:" +""+ error.status)}})
    }else{      
      const id = this.route.snapshot.paramMap.get("id")!
      this.serviceSingle.getSingleComment(id).subscribe({next: (dati) => {this.Comment = dati}, error: (error : HttpErrorResponse)=>{console.log("errore:" +""+ error.status)}})
    }
  }
}
