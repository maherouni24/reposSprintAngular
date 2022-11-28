import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:Post=new Post();
  constructor(private p :PostService , private router:Router) { }

  ngOnInit(): void {
  }
  ajoutPost():void{
    this.post.status="active";
    this.post.titre="";
    this.post.attachement="";
    this.post.userId=1;
    this.p.addPost(this.post).subscribe(
      ()=>this.router.navigate(['posts'] )
    );
    alert("post partagé")
  }
}
