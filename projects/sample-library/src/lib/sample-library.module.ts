import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SampleLibraryComponent } from './sample-library.component';



@NgModule({
  declarations: [SampleLibraryComponent],
  imports: [
    FormsModule
  ],
  exports: [SampleLibraryComponent]
})
export class SampleLibraryModule { }
