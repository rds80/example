import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { PaCellColor } from './cellColor.directive';
import { PaCellColorSwitcher } from './cellColorSwitcher.directive';
import { Product } from './product.model';
import { Model } from './repository.model';

@Component({
    selector: 'paProductTable',
    templateUrl: 'productTable.component.html'
})
export class ProductTableComponent {
    @Input('model')
    dataModel: Model;

    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }

    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }

    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }

    taxRate: number = 0;
    categoryFilter: string;
    itemCount: number = 3;
    
    dateObject: Date = new Date(2020, 1, 20);
    dateString: string = "2020-02-20T00:00:00.000Z";
    dateNumber: number = 1582156800000;

    selectMap = {
        "Watersports":"stay dry",
        "Soccer": "soccer goals",
        "other": "have fun"
    }
}