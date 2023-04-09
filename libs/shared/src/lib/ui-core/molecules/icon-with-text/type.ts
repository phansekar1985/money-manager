import { Property } from 'csstype';
import { TypographyTypes } from '../../atoms';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Position, Size } from '../../type';

interface Option {
  color?: Property.Color;
}

interface TypographyOption extends Option {
  type: TypographyTypes;
  label: string;
}

interface IconOption extends Option {
  type: IconPrefix;
  name: IconName;
}

export interface IconWithTextComponentType {
  typographyOption: TypographyOption;
  iconOption: IconOption;
  position?: Position;
  spaceAround?: Size;
}
