import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {

  constructor(private service: DashboardService) { }

  produtos:Produto[]= this.service.promocoes;

  ngOnInit(): void {
  }
}
