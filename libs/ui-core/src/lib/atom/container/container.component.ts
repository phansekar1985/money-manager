import { Component, Input } from '@angular/core';
import { Size } from '../../type';

@Component({
  selector: 'ui-core-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  @Input() maxWidth: Size = 'lg';
}
