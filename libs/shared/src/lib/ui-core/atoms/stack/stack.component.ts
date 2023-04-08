import {
  Component,
  Attribute,
  Optional,
  Input,
  ElementRef,
  Renderer2,
  AfterViewChecked,
} from '@angular/core';
import { Property } from 'csstype';

@Component({
  selector: 'ui-core-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent implements AfterViewChecked {
  private isContainer = false;

  @Input() wrap: Property.FlexWrap = 'wrap';
  @Input() direction: Property.FlexDirection = 'row';

  constructor(
    @Optional() @Attribute('container') container: unknown,
    @Optional() @Attribute('item') item: unknown,
    private render: Renderer2,
    private host: ElementRef
  ) {
    if (container !== null) {
      this.isContainer = true;
    }

    if (container === null && item === null) {
      console.log('Missing "Container" or "Item" attribute!');
    }
  }

  ngAfterViewChecked(): void {
    if (this.isContainer) {
      this.render.setStyle(this.host.nativeElement, 'flex-wrap', this.wrap);
      this.render.setStyle(
        this.host.nativeElement,
        'flex-direction',
        this.direction
      );
    }
  }
}
