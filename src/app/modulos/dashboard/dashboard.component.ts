import { ModalcarrinhoComponent } from '../modal-carrinho/modalcarrinho/modalcarrinho.component';
import { DashboardService } from './dashboard.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { ItemCarrinho } from 'src/app/models/ItemCarrinho';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private service: DashboardService,
    public dialog: MatDialog,
    ) {}

    carrinho:ItemCarrinho[] =[];
    itensNoCarrinho = 0;
    valorTotalNoCarrinho = 0;
    subs = new Subscription();

  ngOnInit() {
    this.getCarrinho();
    this.getTotalItensCarrinho();
    this.getValorTotalItensCarrinho();
  }
  getCarrinho(){
    this.subs.add(
      this.service.carrinho.subscribe(( carrinho: ItemCarrinho[]) => {
        this.carrinho = carrinho;
      })
    )
  }

  getTotalItensCarrinho(){
    this.subs.add(
      this.service.totalItensNoCarrinho.subscribe(total => {
        this.itensNoCarrinho = total;
      })
    )
  }

  getValorTotalItensCarrinho(){
    this.subs.add(
      this.service.valorTotalCarrinho.subscribe(total =>{
        this.valorTotalNoCarrinho = total;
      })
    )
  }

  openModalCarrinho() {
    const dialogRef = this.dialog.open(ModalcarrinhoComponent, {
      data:{carrinho:this.carrinho ,valorTotal:this.valorTotalNoCarrinho },
      panelClass :'mat-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy() {
    if(this.subs){
      this.subs.unsubscribe();
    }
  }

}
