import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { DataComment } from '../../models/types';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent implements OnInit{

  CommentList : DataComment[] = []

  constructor(public serviceComment : CommentsService){}

  ngOnInit(): void {
    this.serviceComment.getComments().subscribe(c => this.CommentList = c)
  }
}
