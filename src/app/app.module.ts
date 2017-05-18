import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';

import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostService } from './blog-post/blog-post.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    HttpModule
  ],
  providers: [BlogPostService],
  bootstrap: [AppComponent],
})
export class AppModule { }
