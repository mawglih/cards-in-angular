import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw that tree today.',
    },
    {
      title: 'Cool mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'nature',
      content: ' Here is a picture of a mountain.',
    },
    {
      title: 'Mountain biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking122',
      content: 'I was riding a bike today',
    }
  ]
}
