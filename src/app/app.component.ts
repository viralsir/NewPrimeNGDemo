import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from 'primeng/button';
import {MenuItem} from 'primeng/api';
import {Menubar} from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Menubar],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NewPrimeNGDemo';

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Topic',
        icon: 'pi pi-address-book',

        items: [
          {
            label: 'View',
            icon: 'pi pi-bolt',
            routerLink:"view"
          },



        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ]
  }



}
