import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{ Blog } from '../shared/blog.model';
import{ BlogService } from './blog.service';


@Component({
    selector:'blog-list',
    templateUrl:'./blog-list.component.html',
    styleUrls:['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
   
    blogList: Blog[];

    constructor(
        private router: Router, 
        private service: BlogService)
        {}
    
    ngOnInit():void{
        this.getBlogs();
    }

    getBlogs():void{
        this.service.getBlogs().then(blogs=>this.blogList=blogs);
    }    

    viewDetail(selectedBlog:Blog):void{
        this.router.navigate(['/blog',selectedBlog.id]);
    } 
}
