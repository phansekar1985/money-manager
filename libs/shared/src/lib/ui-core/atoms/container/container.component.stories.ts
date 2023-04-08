import { Meta, StoryObj } from '@storybook/angular';
import { Size } from '../../type';
import { ContainerComponent } from './container.component';

const sizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
  title: 'Atom/Container',
  component: ContainerComponent,
  render: (props: ContainerComponent) => {
    return {
      props,
      template: `
        <ui-core-container [maxWidth]="maxWidth">
          <div>Hello world</div>
        </ui-core-container>
      `,
      styles: [
        `
          .container {
            border: 1px solid red;
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
