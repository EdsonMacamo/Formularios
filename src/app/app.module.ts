import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemoalteDriveFromComponent } from './temoalte-drive-from/temoalte-drive-from.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FromNativeValidationComponent } from './from-native-validation/from-native-validation.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGrupComponent } from './form-grup/form-grup.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormArayComponent } from './form-aray/form-aray.component';
import { ReactiveFromValidationComponent } from './reactive-from-validation/reactive-from-validation.component';



@NgModule({
  declarations: [
    AppComponent,
    TemoalteDriveFromComponent,
    FromNativeValidationComponent,
    FormValidationComponent,
    FormControlComponent,
    FormGrupComponent,
    FormBuilderComponent,
    FormArayComponent,
    ReactiveFromValidationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
