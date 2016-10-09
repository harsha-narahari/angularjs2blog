import { Component } from '@angular/core'

@Component({
    selector:'blog-header',    
    templateUrl:'./header.component.html',
    styleUrls:['header.component.css']
})
export class HeaderComponent {
    blogTitle = "In Simple Terms ...";
    subTitle = "... a technical blog on web technologies!";
}