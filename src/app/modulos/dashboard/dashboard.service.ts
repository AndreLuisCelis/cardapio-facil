import { Moks } from './../../moks/moks';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemCarrinho } from 'src/app/models/ItemCarrinho';
import { Produto } from 'src/app/models/produto';




@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  consoleRed = 'background-color:red;padding:5px;border-radius:10px;color:white';
  consoleYellow = 'background-color:#ccc;padding:5px;border-radius:10px;color:white';

  carrinho: Subject<ItemCarrinho[]> = new Subject<ItemCarrinho[]>();
  totalItensNoCarrinho = new Subject<number>();
  valorTotalCarrinho = new Subject<number>();
  itemsCarrinho: ItemCarrinho[] = [];

  produtos = Moks.produtos;
  promocoes = Moks.promocoes;
  sobremesas = Moks.sobremesas;
  bebidas = Moks.bebidas;

  constructor() { }

  addItemCarrinho(produto: Produto) {
    if (this.verificarJaEstaNoCarrinho(produto)) {
      let item: ItemCarrinho[] = this.itemsCarrinho.filter(itemcarrinho => itemcarrinho.produto?.id == produto.id);
      item[0].adicionarItem();
    } else {
      let item = new ItemCarrinho(produto);
      this.itemsCarrinho.push(item);
      console.log('%c carrinho', this.consoleRed, this.itemsCarrinho);
      this.carrinho.next(this.itemsCarrinho);
    }
    this.getTotais();
  }

  removeItemCarrinho(produto: Produto) {
    if (this.verificarJaEstaNoCarrinho(produto)) {
      let item: ItemCarrinho[] = this.itemsCarrinho.filter(itemcarrinho => itemcarrinho.produto?.id == produto.id);
      if(item[0].quantidade == 1){
        let itemForRemove = this.itemsCarrinho.filter(itemcarrinho => itemcarrinho.produto?.id == produto.id);
        let indice = this.itemsCarrinho.indexOf(itemForRemove[0]);
        this.itemsCarrinho.splice(indice,1);
        this.carrinho.next(this.itemsCarrinho);
      }
      item[0].removerItem();
    }
    this.getTotais();
  }

  verificarJaEstaNoCarrinho(produto: Produto) {
    return this.itemsCarrinho.some(prod => prod.produto?.id == produto.id);
  }

  getTotalItensCarrinho() {
    let total = this.itemsCarrinho.reduce((total, item) => total + item.quantidade, 0);
    this.totalItensNoCarrinho.next(total);
  }

  getValorTotalCarrinho(){
    let total = this.itemsCarrinho.reduce((total , item)=>  total+ item.subTotal,0);
    console.log('valor-total', total);
    this.valorTotalCarrinho.next(total);
  }

  getTotais(){
    this.getTotalItensCarrinho();
    this.getValorTotalCarrinho();
  }

}
