import { Component, OnInit } from '@angular/core';
import { PROJETS} from '../projets';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  projet: PROJETS = {
    id : 1,
    name: 'L"art des choix restaurant',
    description: "Restaurant snack installé au Cheylard pour lequel j'ai creer un site vitrine et une page produit facebook",
   
  };
  products = products;
  title = "Mes projets";
 

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/