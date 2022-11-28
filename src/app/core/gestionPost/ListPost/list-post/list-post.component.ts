import { Component, OnInit } from '@angular/core';
import { CommentPost } from 'src/app/model/commentpost';
import { CommentpostService } from '../../services/commentpost.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  title: string = 'publications'
  listPosts: any;
  listCommentPosts: any;
  commentpost:CommentPost=new CommentPost();

  constructor(private p :PostService,private cp :CommentpostService) { }

  ngOnInit(): void {
    this.p.getPost().subscribe(
      (data)=>{this.listPosts=data;
        console.log(data);
      }
     );
  }
  afficherCommentPost(id:number){
    this.cp.getCommentPost(id).subscribe(
      (data)=>{this.listCommentPosts=data;
        console.log(data);
      }
      );
  }
  ajoutCommentPost(id:number):void{
    this.commentpost.status="active";
    this.commentpost.postId=id;
    this.commentpost.userId=1;
    this.cp.addCommentPost(this.commentpost).subscribe(
      ()=>console.log("comment added")
    );
  
  }

}
