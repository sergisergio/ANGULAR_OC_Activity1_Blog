import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Premier post',
      content: 'Contenu 1 ',
      created_at: new Date()
    },
    {
      title: 'Deuxième post',
      content: 'Contenu 2',
      created_at: new Date()
    },
    {
      title: 'Dernier post',
      content: 'Contenu 3',
      created_at: new Date()
    }
  ];
}
