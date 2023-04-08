import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { Size } from '../../type';
import { IconComponentType } from '../../atoms';
import { IconWithTextComponentType } from '../icon-with-text';

type ButtonVariant = 'text' | 'filled' | 'outlined';

export interface ButtonComponentType {
  size?: Size;
  variant?: ButtonVariant;
  label?: string;
  icon?: IconComponentType;
  iconWithText?: IconWithTextComponentType;
  isDisabled?: boolean;
}

@Component({
  selector: 'ui-core-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements ButtonComponentType, AfterViewInit {
  @Input() size?: Size = 'md';
  @Input() variant?: 'text' | 'filled' | 'outlined' = 'filled';
  @Input() label?: string;
  @Input() icon?: IconComponentType;
  @Input() iconWithText?: IconWithTextComponentType;
  @Input() isDisabled?: boolean = false;

  @Output() buttonClick = new EventEmitter();

  type!: 'textOnly' | 'iconWithText' | 'iconOnly';

  ngAfterViewInit(): void {
    this.type = this.label
      ? 'textOnly'
      : this.icon
      ? 'iconOnly'
      : 'iconWithText';

    console.log(this.type);
  }

  onClick() {
    if (this.isDisabled) return;
    this.buttonClick.emit();
  }
}
