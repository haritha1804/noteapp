import { Component } from '@angular/core';
import { NotecreateComponent } from '../notecreate/notecreate.component';
import { NotelistComponent } from '../notelist/notelist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NotecreateComponent,NotelistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
