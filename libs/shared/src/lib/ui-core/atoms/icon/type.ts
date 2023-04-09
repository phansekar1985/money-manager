import { Property } from 'csstype';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Size } from '../../type';

export interface IconComponentType {
  type: IconPrefix;
  name: IconName;
  size?: Size;
  isAnimate?: boolean;
  color?: Property.Color;
}
