import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// External Modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import {
  ContainerComponent,
  IconComponent,
  TypographyComponent,
  GridComponent,
} from './ui-core/atoms';
import {
  ButtonComponent,
  CheckboxComponent,
  IconWithTextComponent,
} from './ui-core/molecules';

// Services
import { PdfService } from './services';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [
    ContainerComponent,
    IconComponent,
    TypographyComponent,
    ButtonComponent,
    CheckboxComponent,
    IconWithTextComponent,
    GridComponent,
  ],
  providers: [PdfService],
})
export class SharedModule {}
