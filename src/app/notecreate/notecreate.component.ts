import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-notecreate',
  // imports: [],
  templateUrl: './notecreate.component.html',
  styleUrl: './notecreate.component.css'
})

export class NotecreateComponent {
  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
  addItem(description: string) {
    if (!description) return;
  
    this.allItems.unshift({
      description,
      done: false
    });
  }
  // constructor(private router: Router) { }

  // navigateToAbout() {
  //   this.router.navigate(['/add']);
  // }
}
