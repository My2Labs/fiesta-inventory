import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { InventoryService } from "src/app/inventory.service";
import { FIESTA } from "./../../../fiesta";



@Component ({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.css'],
})

export class ProductListComponent implements OnInit {
    pageTitle = 'Fiesta Inventory';
    showImage = true;
	fiesta: any;
	// products: fiesta[] = [];
	products: any[] = [];
	filteredProducts: any[] = [];
	errorMessage = '';
	sub!: Subscription;
   
	private _listFilter: string = '';
	
	get listFilter(): string {
		return this._listFilter;
	}
	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredProducts = this.performFilter(value);
	}

	

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


	ngOnInit() {
		this.inventoryService.getProducts().subscribe((theresponse: any) => {
			console.log(theresponse.fiestas);
			this.filteredProducts = theresponse.fiestas;
			return theresponse;
		  });
	}


	


	// ngOnDestroy(): void {
	// 	this.sub.unsubscribe();
	// }

	
	getTotal() {
		var total = 0;
		for(var i = 0; i < this.filteredProducts.length; i++) {
			var product = this.filteredProducts[i];
			total += (product.value * product.quantity);
		}
		return total;
	}

}
