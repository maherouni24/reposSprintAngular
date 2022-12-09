import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/shared/services/blog';
import { BlogserviceService } from 'src/app/shared/services/blogservice.service';
import { LikeService } from 'src/app/shared/services/like.service';
import { CommentaireService } from 'src/app/shared/services/commentaire.service';
@Component({
  selector: 'app-espaceblog',
  templateUrl: './espaceblog.component.html',
  styleUrls: ['./espaceblog.component.css']
})
export class EspaceblogComponent implements OnInit {
  public rec: any;
  public list!: Blog[];
  form: any = {
    decription: null,
  };

  constructor(private blogservice : BlogserviceService,private likeservice:LikeService,
    private serviceblog: BlogserviceService,
    private currentRoute: ActivatedRoute ,
    private commentService: CommentaireService,
    private router : Router) { }

  ngOnInit(): void {
    this.blogservice.getallblog().subscribe(
      (data)=>{
         this.rec=data;
         this.rec=this.rec.blogs;
         console.log(this.rec.blogs)
        }
    )
  }
  
 /* commentaire(blog:Blog):void{
    let i=this.rec.indexOf(blog);
    console.log(this.rec[i])
    const {decription} = this.form;
   this.comntservice.addblog(decription,this.rec[i]).subscribe()
  }*/

like(id:number):void{
  let i=this.rec.indexOf(Blog);
  console.log(this.rec[i])
 this.likeservice.addlike(id).subscribe()
 console.log(id)

}
update(): void {
this.router.navigate(['updateblog/13']);

}
commentaire(id: number): void {
  const { decription } = this.form; //let i=this.rec.indexOf(blog);
  //console.log(this.rec[i])
  this.commentService.addcomment(decription, id).subscribe({
    next: (data) => {
      alert('commentaire ajouté');
      window.location.reload();
    },
    error: (err) => {
      alert('Error!!');
      window.location.reload();
    },
  });
}
}
