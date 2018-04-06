import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-creator-page',
  templateUrl: './creator-page.component.html',
  styleUrls: ['./creator-page.component.css'],
  providers: [PostService]
})

export class CreatorPageComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
