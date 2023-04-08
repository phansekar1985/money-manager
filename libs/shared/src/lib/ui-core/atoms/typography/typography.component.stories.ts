import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { Property } from 'csstype';
import { TypographyComponent, TypographyTypes } from './typography.component';

const typographyTypes: TypographyTypes[] = [
  'body1',
  'body2',
  'button',
  'caption',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
];

const align: Property.TextAlign[] = ['left', 'center', 'right', 'inherit'];

type Typography = TypographyComponent & { label?: string };

export default {
  title: 'Atom/Typography',
  component: TypographyComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  render: ({ label, ...props }) => {
    return {
      props,
      template: `
        <ui-core-typography [type]="type" [align]="align" [color]="color">${label}</ui-core-typography>
      `,
    };
  },
  args: {
    label: 'Sample text',
    type: typographyTypes[0],
    align: align[0],
  },
  argTypes: {
    type: {
      control: 'select',
      options: typographyTypes,
    },
    align: {
      control: 'select',
      options: align,
    },
  },
} as Meta<Typography>;

export const Default: StoryObj<Typography> = {};

export const TextAlign: StoryObj<Typography> = {
  args: { align: 'center' },
};

export const Color: StoryObj<Typography> = {
  args: { color: 'orange' },
};
