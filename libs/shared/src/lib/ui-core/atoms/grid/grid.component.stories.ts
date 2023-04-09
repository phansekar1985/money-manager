import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { GridComponent } from './grid.component';
import { TypographyComponent } from '../typography/typography.component';

export default {
  title: 'Atom/Grid',
  component: GridComponent,
  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent],
    }),
  ],
} as Meta<GridComponent>;

export const Main: StoryObj<GridComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <ui-core-grid>
        <ui-core-grid item xs="4" md="6"><ui-core-typography>Row 1, Column 1 (XS 4 MD 6)</ui-core-typography></ui-core-grid>
        <ui-core-grid item xs="8" md="6"><ui-core-typography>Row 1, Column 2 (XS 8 MD 6)</ui-core-typography></ui-core-grid>
        <ui-core-grid item xs><ui-core-typography>Row 2, Column 1 (XS 4)</ui-core-typography></ui-core-grid>
        <ui-core-grid item xs="4"><ui-core-typography>Row 2, Column 2 (XS 4)</ui-core-typography></ui-core-grid>
        <ui-core-grid item xs><ui-core-typography>Row 2, Column 3 (XS 4)</ui-core-typography></ui-core-grid>
        <ui-core-grid item xs="6"><ui-core-typography>Row 3, Column 1 (XS 6)</ui-core-typography></ui-core-grid>
        <ui-core-grid item xs="6"><ui-core-typography>Row 3, Column 2 (XS 6)</ui-core-typography></ui-core-grid>
      </ui-core-grid> 
     `,
    styles: [
      `
      [item] {
        border: 1px solid grey;
        padding: 4px
      }
     `,
    ],
  }),
};
