import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Console } from 'console';

@Component({
  standalone:true,
  selector: 'app-notecreate',
  // imports: [],
  templateUrl: './notecreate.component.html',
  styleUrl: './notecreate.component.css'
})

export class NotecreateComponent {
  // filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({
      description,
      done: false
    });

  console.log(this.allItems)
  }
  // constructor(private router: Router) { }

  // navigateToAbout() {
  //   this.router.navigate(['/add']);
  // }
}
