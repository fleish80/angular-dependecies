import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EntryBComponent} from '@dependecies/dependecy-a/entry-b';

@Component({
  selector: 'dependecies-entry-a',
  standalone: true,
  imports: [CommonModule, EntryBComponent],
  template: `
    <p>
      entry-a works!
      <dependecies-entry-b></dependecies-entry-b>
    </p>
  `,
  styles: [
  ]
})
export class EntryAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
