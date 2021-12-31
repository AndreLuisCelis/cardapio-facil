import { SobremesasComponent } from './modulos/sobremesas/sobremesas.component';
import { BebidasComponent } from './modulos/bebidas/bebidas.component';
import { PromocoesComponent } from './modulos/promocoes/promocoes.component';
import { ProdutosComponent } from './modulos/home/produtos/produtos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',redirectTo:'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'promocoes', component: PromocoesComponent},
  { path: 'bebidas', component: BebidasComponent},
  { path: 'sobremesas', component: SobremesasComponent},
  { path:'**',redirectTo:'produtos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
