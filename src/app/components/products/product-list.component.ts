import { Component, OnInit } from "@angular/core";
import { InventoryService } from "src/app/inventory.service";



@Component ({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.css'],
})

export class ProductListComponent {
    pageTitle = 'Fiesta Inventory';
    showImage: boolean = false;
	fiesta: any;
   
	private _listFilter: string = '';
	get listFilter(): string {
		return this._listFilter;
	}
	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredProducts = this.performFilter(value);
	}

	filteredProducts: any[] = [];
	products: any[] = [];

	constructor(private inventoryService: InventoryService) {}
	
	performFilter(filterBy: string): any[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.filteredProducts.filter((product: any) =>
		product.name.toLocaleLowerCase().includes(filterBy) 
		||
		product.color.toLocaleLowerCase().includes(filterBy)
		||
		product.descriptors.toLocaleLowerCase().includes(filterBy));
	}

    toggleImage(): void {  //method
        this.showImage = !this.showImage;
    }

	ngOnInit(): void {
		this.products = this.inventoryService.getProducts();
		this.filteredProducts = this.products;
		//this.listFilter = 'search';
	}

	
	getTotal() {
		var total = 0;
		for(var i = 0; i < this.filteredProducts.length; i++) {
			var product = this.filteredProducts[i];
			total += (product.value * product.quantity);
		}
		return total;
	}

}
