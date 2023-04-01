import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { IconComponent } from '../../atom/icon/icon.component';
import { TypographyComponent } from '../../atom/typography/typography.component';
import { IconWithTextComponent } from './icon-with-text.component';

export default {
  title: 'Molecule/IconWithText',
  component: IconWithTextComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      declarations: [IconComponent, TypographyComponent],
    }),
  ],
  args: {
    typographyOption: { label: 'Sample text', type: 'body1' },
    iconOption: { name: 'star', type: 'fas' },
  },
} as Meta<IconWithTextComponent>;

export const leftToRight: StoryObj<IconWithTextComponent> = {};

export const RightToLeft: StoryObj<IconWithTextComponent> = {
  args: {
    position: 'rightToLeft',
  },
};

export const TopToBottom: StoryObj<IconWithTextComponent> = {
  args: {
    position: 'topToBottom',
  },
};

export const BottomToTop: StoryObj<IconWithTextComponent> = {
  args: {
    position: 'bottomToTop',
  },
};
