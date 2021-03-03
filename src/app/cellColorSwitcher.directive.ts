import { ContentChildren, QueryList } from "@angular/core";
import { ContentChild, Directive, Input, SimpleChange } from "@angular/core";
import { PaCellColor } from "./cellColor.directive";

@Directive({
    selector: 'table'
})
export class PaCellColorSwitcher {
    @Input('paCellDarkColor')
    modelProperty: boolean;

    @ContentChildren(PaCellColor, {descendants: true})
    contentChildren: QueryList<PaCellColor>;

    ngOnChanges(changes: {[property: string]: SimpleChange}) {
        this.updateContentChildren(changes['modelProperty'].currentValue);
    }

    ngAfterCOntentInit() {
        this.contentChildren.changes.subscribe(() => {
            setTimeout(() => 
                this.updateContentChildren(this.modelProperty), 0);
        });
    }

    private updateContentChildren(dark: boolean) {
        if (this.contentChildren != null && dark != undefined) {
            this.contentChildren.forEach((child, index) => {
                child.setColor(index % 2 ? dark: !dark);
            });
        }
    }
}