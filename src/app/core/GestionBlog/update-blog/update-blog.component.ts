import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/shared/services/blog';
import { BlogserviceService } from 'src/app/shared/services/blogservice.service';



@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css'],
})
export class UpdateBlogComponent implements OnInit {
 blog!: Blog;
  public rec: any;
  form: any = {
    Titre: null,
    description: null,
   
  };
  constructor(
    private serviceblog: BlogserviceService,
    private currentRoute: ActivatedRoute ,
    private router : Router
  ) {}

  ngOnInit(): void {}

  update(): void {
    const { Titre, decription} = this.form;
    let id = this.currentRoute.snapshot.params['id'];
    this.serviceblog
      .Updateblog(Titre, decription, id)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['allblog']);
      });

  }
}
