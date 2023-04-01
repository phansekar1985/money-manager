import { Component, Input } from '@angular/core';
import { Property } from 'csstype';

export type TypographyTypes =
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2';

@Component({
  selector: 'ui-core-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent {
  @Input() type: TypographyTypes = 'body1';
  @Input() align: Property.TextAlign = 'left';
  @Input() color: Property.Color = 'inherit';
}
