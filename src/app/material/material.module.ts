import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

//import { MatFormField } from '@angular/material/form-field';
//import { MatTableDataSource } from "@angular/material/table";
//import { MatPaginator } from "@angular/material/paginator";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatProgressBarModule } from '@angular/material/progress-bar';

//  import { DataSource } from "@angular/cdk/collections";
//  import { CdkTableModule } from "@angular/cdk/table";

const MatrialComponents=[
  //MatFormField,
 // MatPaginator,
  MatTableModule,
  MatSliderModule,
  MatTabsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  //MatTableDataSource,
  MatCardModule,
  FlexLayoutModule,
  MatProgressBarModule,
  // DataSource,
  // CdkTableModule
]

@NgModule({
  
  imports: [
   MatrialComponents
  ],
  exports:[
   MatrialComponents
  
  ]
})
export class MaterialModule { }
