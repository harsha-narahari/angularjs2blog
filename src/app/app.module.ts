import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { BlogListComponent} from './blog/blog-list.component';
import { BlogComponent} from './blog/blog.component';

import {BlogService} from './blog/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogListComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'/blogs', pathMatch:'full'},
      {path:'blogs', component:BlogListComponent},
      {path:'blog/:id', component:BlogComponent}
    ])
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
