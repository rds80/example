import { ApplicationRef, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ProductFormGroup } from "./form.model";
import { Product } from "./product.model";
import { Model } from "./repository.model";


@Component({
    selector: 'app',
    templateUrl: 'template.html'
})
export class ProductComponent {
    model: Model = new Model();
    // formGroup: ProductFormGroup = new ProductFormGroup();
    showTable: boolean = false;
    darkColor: boolean = false;

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts() : Product[] {
        return this.model.getProducts();
    }

    newProduct: Product = new Product();

    addProduct(p: Product) {
        this.model.saveProduct(p);
    }

    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }

    formSubmitted: boolean = false;

    submitForm() {
        this.addProduct(this.newProduct);
    }
}