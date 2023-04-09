import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';
import { GridComponentType, GridType } from './type';

@Component({
  selector: 'ui-core-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements GridComponentType, AfterContentInit {
  @Input() xs?: string;
  @Input() md?: string;
  @Input() lg?: string;
  @Input() xl?: string;
  @Input() spacing = 2;

  type!: GridType;
  itemClass = '';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterContentInit(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    const isItem = element.hasAttribute(GridType.Item);

    this.renderer.addClass(
      element,
      isItem ? GridType.Item : GridType.Container
    );

    if (isItem) {
      [
        { type: 'xs', value: this.xs },
        { type: 'md', value: this.md },
        { type: 'lg', value: this.lg },
        { type: 'xl', value: this.xl },
      ].forEach(({ type, value }) => {
        if (value) {
          this.renderer.addClass(element, `${type}-${value}`);
        }

        if (value === '') {
          this.renderer.addClass(element, `${type}`);
        }
      });
    }
  }
}
