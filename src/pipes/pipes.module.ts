import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../pipes/safePipe'

@NgModule({
  imports: [CommonModule],
  declarations: [
    SafePipe
  ],
  exports:[SafePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PipeModule {}