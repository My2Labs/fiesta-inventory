import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fiesta } from './../../../fiestas';
import { FIESTA } from './../../../fiesta';
import { InventoryService } from './../../inventory.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Item Detail';
  fiesta: any;
	//products: fiesta[] = [];
	//products: any[] = [];
  errorMessage = '';
  product: fiesta | undefined;
  id: any;
  

  constructor(private route: ActivatedRoute,
              private router: Router,
              private inventoryService: InventoryService) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.pageTitle += `: ${id}`;
      this.getProducts(id);
      console.log(this.getProducts(id))
      console.log(this.pageTitle += `: ${id}`)
      console.log(`${id}`)
      console.log(id)
   }
   
  }


  getProducts(id: number): void {
		this.inventoryService.getProducts().subscribe((products: any) => {
			console.log(products.fiestas);
			this.product = products.fiestas[(id)];
      //this.product = id;
      console.log(id)

		  });
      console.log(id)
  }

//   getProducts(id: number): void {
//     this.inventoryService.getProducts().subscribe({
//       next: products => this.fiesta = products,
//       error: err => this.errorMessage = err,
//     });
//   console.log(this.product)
// }

  

  onBack(): void {
    this.router.navigate(['/list']);
  }
}


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