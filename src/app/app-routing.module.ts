import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './../app/components/product-detail/product-detail.component';
import { ProductListComponent } from './../app/components/products/product-list.component';
import { MainPageComponent } from './../app/components/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'list',
    component: ProductListComponent,
  },
  {
    path: 'item/:id',
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
