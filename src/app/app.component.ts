import { Component } from '@angular/core';
// import { builtinModules } from 'module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
  // styles: [`
  //   h3 {
  //     color: darkblue;
  //   }
  // `]
})
export class AppComponent {
  name = 'Ari';
}
