import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistitemcomponent',
  templateUrl: './postListItemComponent.component.html',
  styleUrls: ['./postListItemComponent.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: Date;

  loveIts = 0;
  constructor() { }

  ngOnInit() {
  }

}
