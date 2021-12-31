import { DashboardService } from '../../dashboard/dashboard.service';
import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-prod',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor(private service: DashboardService) { }

  produtos = this.service.produtos;

  ngOnInit(): void {

  }
}
