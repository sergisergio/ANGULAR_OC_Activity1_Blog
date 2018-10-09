import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistcomponent',
  templateUrl: './PostListComponent.component.html',
  styleUrls: ['./PostListComponent.component.scss']
})

export class PostListComponentComponent implements OnInit {

  @Input() posts: any[];

  constructor() { }

  ngOnInit() {
  }

}
