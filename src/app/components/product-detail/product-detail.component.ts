import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fiesta } from './../../../fiestas';
import { InventoryService } from './../../inventory.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Item Detail';
  fiesta: any;
	// products: fiesta[] = [];
	products: any[] = [];
  errorMessage = '';
  product: any | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private inventoryService: InventoryService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProducts(id);
    }
  }

  // getProduct(id: number): void {
  //   this.inventoryService.getProducts().subscribe({
      
  //     next: product => this.product = product,
  //     error: err => this.errorMessage = err
      
  //   });
  //   console.log(this.product)
  // }

    getProducts(itemid: number): void {
		this.inventoryService.getProducts().subscribe((product: any) => {
			console.log(itemid);
			this.product = product.fiestas[(itemid)];
      //this.product = id;
      console.log(product.fiestas[(itemid)])
      error: (err: string) => this.errorMessage = err
		  });
      console.log(itemid)
  }

  getTotal() {
		var total = 0;
		for(var i = 0; i < this.fiesta.length; i++) {
			var fiesta = this.fiesta[i];
			total += (fiesta.value * fiesta.quantity);
		}
		return total;
	}

  onBack(): void {
    this.router.navigate(['/list']);
  }
}

// import { Component, OnInit, EventEmitter } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { fiesta } from './../../../fiestas';
// import { FIESTA } from './../../../fiesta';
// import { InventoryService } from './../../inventory.service';

// @Component({
//   selector: 'pm-product-detail',
//   templateUrl: './product-detail.component.html',
//   styleUrls: ['./product-detail.component.css']
// })
// export class ProductDetailComponent implements OnInit {
//   pageTitle = 'Item Detail';
//   fiesta: any;
// 	//products: fiesta[] = [];
// 	//products: any[] = [];
//   errorMessage = '';
//   product: fiesta | undefined;
//   id: any;
  

  // constructor(private route: ActivatedRoute,
  //             private router: Router,
  //             private inventoryService: InventoryService) {
  // }

  // ngOnInit() {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   if (id) {
  //     this.pageTitle += `: ${id}`;
  //     this.getProducts(id);
  //     console.log(this.getProducts(id))
  //     console.log(this.pageTitle += `: ${id}`)
  //     console.log(`${id}`)
  //     console.log(id)
  //  }
   
  // }


  // getProducts(itemid: any): void {
	// 	this.inventoryService.getProducts().subscribe((products: any) => {
	// 		console.log(itemid);
	// 		this.product = itemid;
  //     //this.product = id;
  //     console.log(itemid)

	// 	  });
  //     console.log(itemid)
  // }

//   getProducts(id: number): void {
//     this.inventoryService.getProducts().subscribe({
//       next: products => this.fiesta = products,
//       error: err => this.errorMessage = err,
//     });
//   console.log(this.product)
// }

  

//   onBack(): void {
//     this.router.navigate(['/list']);
//   }
// }


  // ngOnInit() {
	// 	this.inventoryService.getProducts().subscribe((theresponse: any) => {
	// 		console.log(theresponse.fiestas);
	// 		this.products = theresponse.fiestas;
	// 		return theresponse;
	// 	  });
	// }

  //USE THIS ONE
//   getProducts(id: number): void {
//     this.inventoryService.getProducts().subscribe({
//       next: products => this.products = products,
//       error: err => this.errorMessage = err,
//     });
//   console.log(this.products)
// }