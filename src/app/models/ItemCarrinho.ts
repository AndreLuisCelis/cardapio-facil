import { DashboardService } from "../modulos/dashboard/dashboard.service";
import { Produto } from "./produto";

export class ItemCarrinho {
  produto: Produto;
  quantidade: number;
  subTotal: number;

  constructor(produto: Produto) {
    this.produto = produto;
    this.quantidade = 1;
    this.subTotal = produto.preco;
  }

  service: DashboardService = new DashboardService();

  public adicionarItem() {
    this.quantidade += 1;
    this.atualizarSubTotal();
  }

  public removerItem(){
    this.quantidade -=1;
    this.atualizarSubTotal();
  }

  atualizarSubTotal() {
    this.subTotal = this.produto.preco * this.quantidade;
  }
}
