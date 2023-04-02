import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// External modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { ButtonComponent } from './atom/button/button.component';
import { IconComponent } from './atom/icon/icon.component';
import { TypographyComponent } from './atom/typography/typography.component';
import { IconWithTextComponent } from './molecule/icon-with-text/icon-with-text.component';
import { CheckboxComponent } from './molecule/checkbox/checkbox.component';
import { StackComponent } from './atom/stack/stack.component';
import { ContainerComponent } from './atom/container/container.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [
    ButtonComponent,
    IconComponent,
    TypographyComponent,
    IconWithTextComponent,
    CheckboxComponent,
    StackComponent,
    ContainerComponent,
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    TypographyComponent,
    IconWithTextComponent,
    CheckboxComponent,
    StackComponent,
    ContainerComponent,
  ],
  providers: [],
})
export class UiCoreModule {}
