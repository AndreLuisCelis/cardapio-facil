import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.component.html',
  styleUrls: ['./sobremesas.component.scss']
})
export class SobremesasComponent implements OnInit {

  constructor(private service: DashboardService) { }

  sobremesas:Produto[]= this.service.sobremesas;

  ngOnInit(): void {
  }

}
