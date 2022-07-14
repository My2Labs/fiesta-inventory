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
	//products: fiesta[] = [];
	//products: any[] = [];
  errorMessage = '';
  products: any | undefined;
  id: any;
  

  constructor(private route: ActivatedRoute,
              private router: Router,
              private inventoryService: InventoryService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.route.snapshot.paramMap.get('id');
      console.log(this.route.snapshot.paramMap.get('id'))
      this.getProducts(id);
      
   }
   
  }

  // getProducts(id: any): void {
  //   this.inventoryService.getProducts().subscribe({
  //     next: products => this.products = products,
  //     error: err => this.errorMessage = err,
  //   });
//   console.log(this.products)
// }

  getProducts(id: any): void {
		this.inventoryService.getProducts().subscribe((theresponse: any) => {
			console.log(theresponse.fiestas);
			this.products = theresponse.fiestas;
			return theresponse;
		  });
      console.log(this.products)
  }

  

  onBack(): void {
    this.router.navigate(['/list']);
  }
}