import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { ProductComponent } from './component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaAttrDirective } from './attr.directive';
import { PaModel } from './twoway.directive';
import { PaStructureDirective } from './structure.directive';
import { PaIteratorDirective } from './iterator.directive';
import { PaCellColor } from './cellColor.directive';
import { PaCellColorSwitcher } from './cellColorSwitcher.directive';
import { ProductTableComponent } from './productTable.component';
import { ProductFormControl } from './form.model';
import { ProductFormComponent } from './productForm.component';
import { PaToggleView } from './toggleView.component';
import { PaAddTaxPipe } from './addTax.pipe';
import { PaCategoryFilterPipe } from './categoryFilter.pipe';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    ProductComponent,
    PaAttrDirective,
    PaModel,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    ProductTableComponent,
    ProductFormComponent,
    PaToggleView,
    PaAddTaxPipe,
    PaCategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers: [{
  //   provide: LOCALE_ID,
  //   useValue: "fr-FR"
  // }],
  bootstrap: [ProductComponent]
})
export class AppModule { }
