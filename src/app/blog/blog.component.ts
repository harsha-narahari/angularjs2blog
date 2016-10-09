import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import{ Router } from '@angular/router';
import { Location } from '@angular/common';

import { BlogListComponent} from './blog-list.component'
import { Blog } from '../shared/blog.model'
import { BlogService } from './blog.service';


@Component({
    selector:'blog',
    templateUrl:'blog.component.html',
    styleUrls:['blog.component.css']
})
export class BlogComponent implements OnInit{
    selectedBlog:Blog;
    blogs: Blog[];

    public constructor(
        private service: BlogService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location
        ){}
    
    ngOnInit():void{
        // this.service.getBlog(Router.arguments['id'])
        // .then(blog=>this.selectedBlog=blog);
        //debugger;
        
        // this.route.params.forEach((params: Params) => {
        //     let id = +params['id'];
        //     this.service.getBlog(id.toString())
        // .then(blog => this.selectedBlog = blog);        
        // });

        // let id = this.route.params.getValue('id').id;
        // debugger;
        // let id = this.route.params.value.id;
        // this.service.getBlog(parseInt(id)).then(blog => this.selectedBlog = blog);
        
        //this.getBlogs().then(blogs=> this.selectedBlog =blogs.filter(blog=>blog.id==id))

        // this.route.params.forEach((params: Params) => {
        //     let id = +params['id'];
        //     this.service.getBlogs()
        //     .then(blogs => this.selectedBlog = blogs.filter(blog => blog.id == id)[0]);        
        // });


        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.selectedBlog = this.service.getBlog(id);        
        });
    }

    goBack(): void {
    // this.location.back();
    this.router.navigate(['blogs']);
  }
}