import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-sample-library',
  templateUrl: './sample-library.component.html',
  styles: []
})
export class SampleLibraryComponent implements OnInit {
  name: string;
  username: string;
  constructor() {}

  ngOnInit() {}
  onSubmit() {
    this.name = this.username;
  }
}
