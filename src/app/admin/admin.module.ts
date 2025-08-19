import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { AdminComponentsModule } from './admin.components/admin.components.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    AdminComponentsModule
  ],
  exports: [
    LayoutModule,
  ]
})
export class AdminModule { }
