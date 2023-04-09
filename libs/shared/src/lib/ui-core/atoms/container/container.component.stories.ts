import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Size } from '../../type';
import { ContainerComponent } from './container.component';
import { TypographyComponent } from '../typography/typography.component';

const sizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
  title: 'Atom/Container',
  component: ContainerComponent,
  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent],
    }),
  ],
  render: (props: ContainerComponent) => {
    return {
      props,
      template: `
        <ui-core-container [maxWidth]="maxWidth">
          <ui-core-typography><p>Hello world</p></ui-core-typography>
        </ui-core-container>
      `,
      styles: [
        `
          p {
            border: 1px solid red;
            padding: 5px;
          }
        `,
      ],
    };
  },
  args: {
    maxWidth: 'lg',
  },
  argTypes: {
    maxWidth: { control: 'select', options: sizes },
  },
} as Meta<ContainerComponent>;

export const Default: StoryObj<ContainerComponent> = {};

export const maxWidth: StoryObj<ContainerComponent> = {
  args: {
    maxWidth: 'xl',
  },
};
