import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ProdutosComponent } from './modulos/home/produtos/produtos.component';
import { ModalcarrinhoComponent } from './modulos/modal-carrinho/modalcarrinho/modalcarrinho.component';
import { MatDialogModule } from '@angular/material/dialog';

import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { PromocoesComponent } from './modulos/promocoes/promocoes.component';
import { BebidasComponent } from './modulos/bebidas/bebidas.component';
import { SobremesasComponent } from './modulos/sobremesas/sobremesas.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProdutosComponent,
    ModalcarrinhoComponent,
    PromocoesComponent,
    BebidasComponent,
    SobremesasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
  },
  {
    provide:  DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
