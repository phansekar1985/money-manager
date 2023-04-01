import { Component, Input } from '@angular/core';
import { Property } from 'csstype';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { TypographyTypes } from '../../atom/typography/typography.component';
import { Position, Size } from '../../type';

@Component({
  selector: 'ui-core-icon-with-text',
  templateUrl: './icon-with-text.component.html',
  styleUrls: ['./icon-with-text.component.scss'],
})
export class IconWithTextComponent {
  @Input() typographyOption!: {
    type: TypographyTypes;
    label: string;
    color?: Property.Color;
  };
  @Input() iconOption!: {
    type: IconPrefix;
    name: IconName;
    color?: Property.Color;
  };
  @Input() position: Position = 'leftToRight';
  @Input() spaceAround: Size = 'sm';
}
