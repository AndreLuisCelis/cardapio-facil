import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { DashboardService } from 'src/app/modulos/dashboard/dashboard.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor(private service: DashboardService) { }


  @Input()produtos:Produto[]=[] ;

  ngOnInit(): void {

  }

  adicionarNoCarrinho(produto:Produto ){
    this.service.addItemCarrinho(produto);
  }

}
