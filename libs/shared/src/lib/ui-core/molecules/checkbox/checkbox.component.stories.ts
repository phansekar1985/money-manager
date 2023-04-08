import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { IconWithTextComponent } from '../icon-with-text/icon-with-text.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { TypographyComponent } from '../../atoms/typography/typography.component';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'Molecule/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      declarations: [IconComponent, TypographyComponent, IconWithTextComponent],
    }),
  ],
  args: {
    label: 'Sample text',
    isChecked: false,
  },
} as Meta<CheckboxComponent>;

export const Default: StoryObj<CheckboxComponent> = {};

export const PreChecked: StoryObj<CheckboxComponent> = {
  args: {
    isChecked: true,
  },
};

export const isInValid: StoryObj<CheckboxComponent> = {
  args: {
    isValid: false,
  },
};
