import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'attribute-directives';

  className1='exOne';//same class name as in example one
  className2='exTwo';

  styleProperty='red';
  txtColor='error';

  name:string="Sanju";
}
