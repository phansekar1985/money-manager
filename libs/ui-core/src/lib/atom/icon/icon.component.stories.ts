import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import { IconComponent } from './icon.component';

const iconName: IconName[] = [
  '0',
  'burger',
  'cab',
  'dog',
  'ear',
  'face-confused',
  'spinner',
  'gear',
  'square',
  'check-square',
];

export default {
  title: 'Atom/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
    }),
  ],
  args: {
    name: 'star',
    type: 'fas',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['far', 'fas', 'fab'],
    },
    name: {
      control: 'select',
      options: iconName,
    },
  },
} as Meta<IconComponent>;

export const Default: StoryObj<IconComponent> = {};

export const PulseAnimation: StoryObj<IconComponent> = {
  args: { isAnimate: true },
};

export const Color: StoryObj<IconComponent> = {
  args: { color: 'red' },
};
