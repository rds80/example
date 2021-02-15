import { ApplicationRef, Component } from "@angular/core";
import { Product } from "./product.model";
import { Model } from "./repository.model";

@Component({
    selector: 'app',
    templateUrl: 'template.html'
})
export class ProductComponent {
    model: Model = new Model();
    selectedProduct: string;

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model
    }

    getClasses(key: number): string {
        let product = this.model.getProduct(key);
        return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
        //return this.model.getProducts().length == 5 ? 'bg-success' : 'bg-warning';
    }

    getClassMap(key: number) : Object {
        let product = this.model.getProduct(key);
        return {
            'text-center bg-danger': product.name == 'Kayak',
            'bg-info': product.price < 50
        }
    }

    getStyles(key: number) {
        let product = this.model.getProduct(key);
        return {
            fontSize: '30px',
            'margin.px': 100,
            color: product.price > 50 ? 'red': 'green'
        }
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getClassesByPosition(position: number): string {
        let product = this.getProductByPosition(position);
        return 'p-2' + (product.price < 50 ? 'bg-info':'bg-warning');
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts() : Product[] {
        return this.model.getProducts();
    }

    getProductCount(): number {
        return this.getProducts().length;
    }
    
    getSelected(product: Product) : boolean {
        return product.name == this.selectedProduct;
    }
    
    targetName: string = "Kayak";
    fontSizeWithUnits: string = '30px';
    fontSizeWithoutUnits: string='30';
}