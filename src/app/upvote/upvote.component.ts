import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css'],
})
export class UpvoteComponent implements OnInit {
  upVoteCount = 0;
  downVoteCount = 0;
  upVote() {
    this.upVoteCount += 1;
  }

  downVote() {
    this.downVoteCount += 1;
  }
  constructor() {}

  ngOnInit(): void {}
}
