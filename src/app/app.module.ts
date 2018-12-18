import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './select/select.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SortingComponent } from './sorting/sorting.component';
import { TableComponent } from './table/table.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatOptionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatChipsModule
} from '@angular/material';


import { MatMomentDateModule } from '@angular/material-moment-adapter';

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatOptionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatAutocompleteModule,
  MatChipsModule
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ...modules
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    SelectComponent,
    DatepickerComponent,
    CheckboxComponent,
    RadioComponent,
    FormFieldComponent,
    FormValidationsComponent,
    ModalDialogComponent,
    TooltipComponent,
    SortingComponent,
    TableComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
