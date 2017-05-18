import { Component, OnInit } from '@angular/core';
import { BlogPostService } from './blog-post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass']
})

export class BlogPostComponent implements OnInit {
  posts: Array<Object> = [];

  constructor(private _blogPostService: BlogPostService) { }
  ngOnInit() {
    this._blogPostService.getPosts()
        .subscribe(repo => this.posts.push(repo));
  }
}
