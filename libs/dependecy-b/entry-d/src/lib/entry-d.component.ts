import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dependecies-entry-d',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      entry-d works!
    </p>
  `,
  styles: [
  ]
})
export class EntryDComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
