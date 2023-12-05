import { NgModule } from '@angular/core';

import {CoursesComponent} from "./courses.component";
import {CoursesRoutingModule} from "./courses-routing.module";


@NgModule({
  imports: [CoursesRoutingModule],
  declarations: [CoursesComponent],
  exports: [CoursesComponent]
})
export class CoursesModule { }
