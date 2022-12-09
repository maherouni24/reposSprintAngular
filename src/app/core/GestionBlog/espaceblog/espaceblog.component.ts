import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/services/blog';
import { BlogserviceService } from 'src/app/shared/services/blogservice.service';
import { LikeService } from 'src/app/shared/services/like.service';

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

  constructor(private blogservice : BlogserviceService,private likeservice:LikeService) { }

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
}
