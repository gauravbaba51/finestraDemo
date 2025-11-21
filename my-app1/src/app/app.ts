import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('my-app1');
  // title of the application to be of type string and initialised with the help of signal it is not readonly
  protected title = signal<string>('my-app1');
  

  // protected readonly title = signal<string>('my-app1');
  }
