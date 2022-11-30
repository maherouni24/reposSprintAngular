import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentPost } from 'src/app/model/commentpost';
import { DislikePost } from 'src/app/model/dislikepost';
import { LikePost } from 'src/app/model/likepost';
import { CommentpostService } from '../../services/commentpost.service';
import { DislikepostService } from '../../services/dislikepost.service';
import { LikepostService } from '../../services/likepost.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  title: string = 'publications'
  post:any;
  listPosts: any;
  listCommentPosts: any;
  commentpost:CommentPost=new CommentPost();
  likepost:LikePost=new LikePost();
  dislikepost:DislikePost=new DislikePost();

  constructor(private p :PostService,private cp :CommentpostService, private router:Router,private l:LikepostService,private d:DislikepostService) { }

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
    this.commentpost.status="";
    this.commentpost.postId=id;
    this.commentpost.userId=1;
    this.cp.addCommentPost(this.commentpost).subscribe(
      ()=>console.log("comment added")
    );  
  }
  supprimerPost(id:number){
    this.p.removePost(id).subscribe(()=>this.router.navigate(['posts']))
    alert("post supprimé")
  }

  modifierPost(id:number){
    this.router.navigate(['addpost'])
  }
  ajouterLikePost(post:any){
    this.likepost.postId=post.id;
    this.likepost.userId=1;
    this.l.addlikePost(this.likepost).subscribe(
      ()=>console.log("post liked")
    );
    post.like++;
    this.p.updatePost(post.id,post).subscribe(()=>{
    }) 
  }
  ajouterDislikePost(post:any){
    this.dislikepost.postId=post.id;
    this.dislikepost.userId=1;
    this.d.adddislikePost(this.dislikepost).subscribe(
      ()=>console.log("post disliked")
    );
    post.dislike++;
    this.p.updatePost(post.id,post).subscribe(()=>{
    }) 
  }
  
}
