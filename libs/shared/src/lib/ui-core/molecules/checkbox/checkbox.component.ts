import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-core-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() label = '';
  @Input() isChecked = false;
  @Input() isValid = true;
  @Output() checked = new EventEmitter();

  onClick() {
    this.isChecked = !this.isChecked;
    this.checked.emit(this.isChecked);
  }
}
