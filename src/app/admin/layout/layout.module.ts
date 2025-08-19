import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { LayoutComponentsModule } from '../layout/layout.components/layout.components.module';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutComponentsModule,
    RouterModule,
    MatSidenavModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
