import {Blog} from '../shared/blog.model';
import{blogs} from './mock-blog';
import {Injectable} from '@angular/core'

@Injectable()
export class BlogService{
    getBlogs(): Promise<Blog[]> {
        return Promise.resolve(blogs);;
    }

    // getBlog(id:number):Promise<Blog>{
    //     return this.getBlogs()
    //            .then(blogs => blogs.find(blog => blog.id === id));
    // }

    getBlog(id:number):Blog{
        return blogs.filter(blog=>blog.id===id)[0];
    }    
}