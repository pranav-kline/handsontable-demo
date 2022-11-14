import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { RouterModule } from '@angular/router';
// import { DataGridsConfigurationComponent } from '../data-grids-configuration/data-grids-configuration.component';

registerAllModules();

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HandsonTableComponent } from './handson-table/handson-table.component';
import { StudyComponent } from './study/study.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NgSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HotTableModule,
    RouterModule,
  ],
  declarations: [AppComponent, HandsonTableComponent, StudyComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
