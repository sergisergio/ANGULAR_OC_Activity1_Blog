import { Component } from '@angular/core';
import { PostItem } from './post.item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  posts = [

    new PostItem('Titre1', 'Contenu1'),
    new PostItem('Titre2', 'Contenu2'),
    new PostItem('Titre3', 'Contenu3')

  ];


}
