import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EntryCComponent} from '@dependecies/dependecy-b/entry-c';

@Component({
  selector: 'dependecies-entry-b',
  standalone: true,
  imports: [CommonModule, EntryCComponent],
  template: `
    <p>
      entry-b works!
      <dependecies-entry-c></dependecies-entry-c>
    </p>
  `,
  styles: [
  ]
})
export class EntryBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
