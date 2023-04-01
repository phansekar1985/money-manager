import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from './atom/button/button.component';
import { IconComponent } from './atom/icon/icon.component';
import { TypographyComponent } from './atom/typography/typography.component';
import { IconWithTextComponent } from './molecule/icon-with-text/icon-with-text.component';
import { CheckboxComponent } from './molecule/checkbox/checkbox.component';
import { StackComponent } from './atom/stack/stack.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [
    ButtonComponent,
    IconComponent,
    TypographyComponent,
    IconWithTextComponent,
    CheckboxComponent,
    StackComponent,
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    TypographyComponent,
    IconWithTextComponent,
    CheckboxComponent,
    StackComponent,
  ],
  providers: [],
})
export class UiCoreModule {}
