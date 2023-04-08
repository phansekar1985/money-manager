import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { IconWithTextComponent } from '../icon-with-text/icon-with-text.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { TypographyComponent } from '../../atoms/typography/typography.component';
import { ButtonComponent } from './button.component';

type ButtonType = ButtonComponent & { label?: string };

export default {
  title: 'Molecule/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      declarations: [TypographyComponent, IconWithTextComponent, IconComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['text', 'filled', 'outlined'],
    },
    label: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
} as Meta<ButtonType>;

export const TextButton: StoryObj<ButtonType> = {
  args: { label: 'Sample text' },
};

export const IconButton: StoryObj<ButtonType> = {
  args: { icon: { type: 'fas', name: 'star' } },
};

export const IconWithTextButton: StoryObj<ButtonType> = {
  args: {
    iconWithText: {
      iconOption: { type: 'fas', name: 'star', color: 'orange' },
      typographyOption: { label: 'Sample text', type: 'body1', color: 'white' },
    },
  },
};

export const Outlined: StoryObj<ButtonType> = {
  args: { variant: 'outlined', label: 'Sample text' },
};

export const Disabled: StoryObj<ButtonType> = {
  args: { isDisabled: true, label: 'Sample text' },
};
