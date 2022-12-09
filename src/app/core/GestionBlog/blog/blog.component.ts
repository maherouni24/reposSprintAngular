import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogserviceService } from 'src/app/shared/services/blogservice.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  form: any = {
    Titre: null,
    decription: null,
    image :null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private blogservice : BlogserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const {Titre, decription} = this.form;

    this.blogservice.addblog(Titre, decription).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['allblog']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
