import { Attribute, Directive, ElementRef, Input, Output, SimpleChange, EventEmitter, HostBinding, HostListener } from "@angular/core";
import { Product } from "./product.model";

@Directive({
    selector: '[pa-attr]',
})
export class PaAttrDirective {
    @Input('pa-attr')
    @HostBinding('class')
    bgClass: string;

    @Input('pa-product')
    product: Product;

    @Output('pa-category')
    click = new EventEmitter<string>();

    @HostListener('click')
    triggerCustomEvent() {
        if (this.product != null) {
            this.click.emit(this.product.category);
        }
    }

    // ngOnChanges(changes: { [property: string]: SimpleChange }) {
    //     let change = changes['bgClass'];
    //     let classList = this.element.nativeElement.classList;
    //     if (!change.isFirstChange() &&
    //         classList.contains(change.previousValue)) {
    //         classList.remove(change.previousValue);
    //     }
    //     if (!classList.contains(change.currentValue)) {
    //         classList.add(change.currentValue);
    //     }
    // }
}