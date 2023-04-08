import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { Property } from 'csstype';
import { TypographyComponent } from '../typography/typography.component';
import { StackComponent } from './stack.component';

const wrapOptions: Property.FlexWrap[] = ['wrap', 'wrap-reverse', 'nowrap'];
const directionOptions: Property.FlexDirection[] = [
  'row',
  'row-reverse',
  'column',
  'column-reverse',
];

export default {
  title: 'Atom/Stack',
  component: StackComponent,
  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent],
    }),
  ],
  args: {
    wrap: wrapOptions[0],
    direction: directionOptions[0],
  },
  argTypes: {
    wrap: { control: 'select', options: wrapOptions },
    direction: { control: 'select', options: directionOptions },
  },
  render: (props: StackComponent) => {
    return {
      props,
      template: `
        <ui-core-stack container [wrap]="wrap" [direction]="direction">
          <ui-core-stack item><ui-core-typography>Item 1</ui-core-typography></ui-core-stack>
           <ui-core-stack item><ui-core-typography>Item 2</ui-core-typography></ui-core-stack>
           <ui-core-stack item><ui-core-typography>Item 3</ui-core-typography></ui-core-stack>
           <ui-core-stack item><ui-core-typography>Item 4</ui-core-typography></ui-core-stack>
           <ui-core-stack item><ui-core-typography>Item 5</ui-core-typography></ui-core-stack>
           <ui-core-stack item><ui-core-typography>Item 6</ui-core-typography></ui-core-stack>
           <ui-core-stack item><ui-core-typography>Item 7</ui-core-typography></ui-core-stack>
        </ui-core-stack>
      `,
      styles: [
        `
        [container] {
          border: 1px solid black;
        }
        [item] {
          border: 1px solid red;
          padding: 5px;
          min-width: 200px;
        }
      `,
      ],
    };
  },
} as Meta<StackComponent>;

export const BasicGrid: StoryObj<StackComponent> = {};

export const Wrap: StoryObj<StackComponent> = {
  args: { wrap: 'wrap-reverse' },
};

export const Direction: StoryObj<StackComponent> = {
  args: { direction: 'column' },
};
