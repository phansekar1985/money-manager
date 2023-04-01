import { Component, Input } from '@angular/core';
import { Property } from 'csstype';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-core-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() type!: IconPrefix;
  @Input() name!: IconName;
  @Input() size!: ButtonSize;
  @Input() isAnimate!: boolean;
  @Input() color: Property.Color = 'inherit';

  constructor(private library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
