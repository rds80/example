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

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts() : Product[] {
        return this.model.getProducts();
    }

    getSelected(product: Product) : boolean {
        return product.name == this.selectedProduct;
    }
}