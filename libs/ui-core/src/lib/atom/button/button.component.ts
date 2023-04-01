import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Size } from '../../type';

@Component({
  selector: 'ui-core-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() isDisabled = false;
  @Input() size: Size = 'md';
  @Input() variant: 'text' | 'filled' | 'outlined' | 'elevated' = 'filled';

  @Output() buttonClick = new EventEmitter();

  onClick() {
    if (this.isDisabled) return;

    this.buttonClick.emit();
  }
}
