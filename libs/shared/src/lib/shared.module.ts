import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// external modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// services
import { PdfService } from './services';

// components
import {
  ContainerComponent,
  IconComponent,
  StackComponent,
  TypographyComponent,
} from './ui-core/atoms';
import {
  ButtonComponent,
  CheckboxComponent,
  IconWithTextComponent,
} from './ui-core/molecules';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [
    ContainerComponent,
    IconComponent,
    StackComponent,
    TypographyComponent,
    ButtonComponent,
    CheckboxComponent,
    IconWithTextComponent,
  ],
  providers: [PdfService],
})
export class SharedModule {}
