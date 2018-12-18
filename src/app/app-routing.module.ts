import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'select', component: SelectComponent },
  { path: 'date-picker', component: DatepickerComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'form-field', component: FormFieldComponent },
  { path: 'form-validation', component: FormValidationsComponent },
  { path: 'modal-dialog', component: ModalDialogComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'sorting', component: SortingComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
