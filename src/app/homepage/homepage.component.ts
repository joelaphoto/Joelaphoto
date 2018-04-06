import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [PostService]
})

export class HomepageComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  goToDetailPage(post) {
    this.router.navigate(['posts', post.$key]);
  }

}
