import { Component } from '@angular/core';
import { NewFormContentDTO } from '../../models/types';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrl: './new-comment.component.css'
})
export class NewCommentComponent {
  //template driven forms
  newPost : NewFormContentDTO  = new NewFormContentDTO( "", "", "");

  constructor(private service : CommentsService){}

  SendMyPost(){
    //post collegato al mio server
    /*this.service.addNewPost(this.newPost).subscribe( post => 
    this.newPost = new NewFormContentDTO("", "", "")
    )*/
    this.newPost = new NewFormContentDTO("", "", "")
  }

}
