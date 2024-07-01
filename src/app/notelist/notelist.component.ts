import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notelist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notelist.component.html',
  styleUrl: './notelist.component.css'
})
export class NotelistComponent {
  title = 'notes';
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


}
