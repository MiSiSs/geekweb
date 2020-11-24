import { Component } from '@angular/core';
import listMenu from 'src/assets/json/menu.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'geekweb';
  Menu: any = listMenu;
}
