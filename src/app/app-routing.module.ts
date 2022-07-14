import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './../app/components/product-detail/product-detail.component';
import { ProductListComponent } from './../app/components/products/product-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductListComponent,
  },
  {
    path: 'item',
    component: ProductDetailComponent,
  },
  // {
  //   path: '**', redirectTo: '',
  //   component: ProductListComponent,
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
