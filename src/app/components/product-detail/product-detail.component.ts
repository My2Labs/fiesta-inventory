import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fiesta } from './../../../fiestas';
import { InventoryService } from './../../inventory.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() fiesta: fiesta[] = [];
  pageTitle = 'Item Detail';
  //fiesta: any;
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

  getProducts(id: number): void {
		this.inventoryService.getProducts().subscribe((product: any) => {
			console.log(id-1);
			this.product = product.fiestas[(id-1)];
      //this.product = id;
      console.log(product.fiestas[(id-1)])
      error: (err: string) => this.errorMessage = err
		  });
      console.log(id)
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




