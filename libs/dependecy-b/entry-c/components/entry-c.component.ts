import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EntryDComponent} from '@dependecies/dependecy-b/entry-d';

@Component({
  selector: 'dependecies-entry-c',
  standalone: true,
  imports: [CommonModule, EntryDComponent],
  template: `
    <p>
      entry-c works!
      <dependecies-entry-d></dependecies-entry-d>
    </p>
  `,
  styles: [
  ]
})
export class EntryCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
