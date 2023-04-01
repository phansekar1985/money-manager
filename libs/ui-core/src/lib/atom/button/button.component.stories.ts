import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { IconWithTextComponent } from '../../molecule/icon-with-text/icon-with-text.component';
import { IconComponent } from '../icon/icon.component';
import { TypographyComponent } from '../typography/typography.component';
import { ButtonComponent } from './button.component';

type ButtonType = ButtonComponent & { label?: string };

export default {
  title: 'Atom/Button',
  component: ButtonComponent,
  args: {
    label: 'Submit',
  },
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      declarations: [TypographyComponent, IconWithTextComponent, IconComponent],
    }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'filled', 'outlined', 'elevated'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isDisabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
  render: ({ label, ...props }) => {
    return {
      props,
      template: `
        <ui-core-button [isDisabled]="isDisabled" [variant]="variant" [size]="size">
          <ui-core-typography type="button" [color]="color">${label}</ui-core-typography>
        </ui-core-button>
      `,
    };
  },
} as Meta<ButtonType>;

export const Filled: StoryObj<ButtonType> = {};

export const Text: StoryObj<ButtonType> = {
  args: { variant: 'text' },
};

export const Outlined: StoryObj<ButtonType> = {
  args: { variant: 'outlined' },
};

export const Elevated: StoryObj<ButtonType> = {
  args: { variant: 'elevated' },
};

export const Disabled: StoryObj<ButtonType> = {
  args: { isDisabled: true },
};

export const Size: StoryObj<ButtonType> = {
  args: { size: 'sm' },
};

export const WithIcon: StoryObj<ButtonType> = {
  render: ({ label, ...props }) => {
    return {
      props,
      template: `
        <ui-core-button [isDisabled]="isDisabled" [variant]="variant" [size]="size">
          <ui-core-icon-with-text [iconOption]="{ type: 'fas', name: 'gear', color: 'white' }" [typographyOption]="{ type: 'button', label: '${label}', color: 'white' }"></ui-core-icon-with-text>
        </ui-core-button>
      `,
    };
  },
};
