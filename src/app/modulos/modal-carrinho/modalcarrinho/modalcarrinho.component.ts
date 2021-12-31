import { DashboardService } from '../../dashboard/dashboard.service';
import { ChangeDetectorRef, Component, Inject, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ItemCarrinho } from 'src/app/models/ItemCarrinho';

interface DataModalCarrinho {
  carrinho: ItemCarrinho[],
  valorTotal: number
}

@Component({
  templateUrl: './modalcarrinho.component.html',
  styleUrls: ['./modalcarrinho.component.scss']
})
export class ModalcarrinhoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalcarrinhoComponent>,
    @Inject(MAT_DIALOG_DATA) public data : DataModalCarrinho,
    public service: DashboardService,
  ) {
   this.subs.add(this.service.valorTotalCarrinho.subscribe((res) => this.valorTotal=res));
  }

  subs = new Subscription();
  itemsCarrinho: ItemCarrinho[]= this.data.carrinho;
  valorTotal:number = this.data.valorTotal;

  ngOnInit(): void {
    console.log(this.data);
  }

  addItemCarrinho(item:ItemCarrinho){
    this.service.addItemCarrinho(item.produto);
  }

  removeItemCarrinho(item:ItemCarrinho){
    this.service.removeItemCarrinho(item.produto);
    this.fecharModalEm1Seg();
  }

  ngDoCheck() {
    // this.fecharModalEm1Seg();
  }

  fecharModalEm1Seg(){
    if(!this.itemsCarrinho?.length){
      setTimeout(() => {
        this.dialogRef.close();
      }, 1000);
    }
  }


}
