import { ApplicationRef, Component } from "@angular/core";
import { Product } from "./product.model";
import { Model } from "./repository.model";

@Component({
    selector: 'app',
    templateUrl: 'template.html'
})
export class ProductComponent {
    model: Model = new Model();
    targetName: string = 'Kayak';
    counter: number = 1;

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

    get nextProduct(): Product {
        return this.model.getProducts().shift();
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }
    getProductCount() : number {
        console.log('getProductCount invoked');
        return this.getProducts().length;
    }

    getKey(index: number, product: Product) {
        return product.id;
    }

    getProductPrice(index: number) : number {
        return Math.floor(this.getProduct(index).price);
    }

    // getClassesByPosition(position: number): string {
    //     let product = this.getProductByPosition(position);
    //     return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
    // }

    // getClasses(key: number): string {
    //     let product = this.model.getProduct(key);
    //     return "p-2 " + (product.price < 50 ? "bg-info": "bg-warning");
    // }

    // getClassMap(key: number) : Object {
    //     let product = this.model.getProduct(key);
    //     return {
    //         "text-center bg-danger": product.name == "Kayak",
    //         "bg-info": product.price < 50 
    //     }
    // }

    // getStyles(key: number) {
    //     let product = this.model.getProduct(key);
    //     return {
    //         fontSize: '30px',
    //         "margin.px": 100,
    //         color: product.price > 50 ? 'red':'green'
    //     }
    // }
    
    // fontSizeWithUnits: string = '30px';
    // fontSizeWithoutUnits: string='30';
}