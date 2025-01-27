import { EditLojaModalComponent } from './pages/modals/loja-modal/edit-loja-modal.component';
import { ViewLojaModalComponent } from './pages/modals/loja-modal/view-loja-modal.component';
import { DeleteLojaModalComponent } from './pages/modals/loja-modal/delete-loja-modal.component';
import { CreateLojaModalComponent } from './pages/modals/loja-modal/create-loja-modal.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import ptBR from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ClienteObservableComponent } from './pages/observables/cliente-observable/cliente-observable.component';
import { ProdutoObservableComponent } from './pages/observables/produto-observable/produto-observable.component';
import { PedidoObservableComponent } from './pages/observables/pedido-observable/pedido-observable.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { CepPipe } from './pipes/cep.pipe';
import { TelefonePipe } from './pipes/telefone.pipe';
import { EditClienteModalComponent } from './pages/modals/cliente-modal/edit-cliente-modal.component';
import { CreateClienteModalComponent } from './pages/modals/cliente-modal/create-cliente-modal.component';
import { DeleteClienteModalComponent } from './pages/modals/cliente-modal/delete-cliente-modal.component';
import { DeleteProdutoModalComponent } from './pages/modals/produto-modal/delete-produto-modal.component';
import { CreateProdutoModalComponent } from './pages/modals/produto-modal/create-produto-modal.component';
import { EditProdutoModalComponent } from './pages/modals/produto-modal/edit-produto-modal.component';
import { ViewProdutoModalComponent } from './pages/modals/produto-modal/view-produto-modal.component';
import { ViewPedidoModalComponent } from './pages/modals/pedido-modal/view-pedido-modal.component';
import { EditPedidoModalComponent } from './pages/modals/pedido-modal/edit-pedido-modal.component';
import { CreatePedidoModalComponent } from './pages/modals/pedido-modal/create-pedido-modal.component';
import { DeletePedidoModalComponent } from './pages/modals/pedido-modal/delete-pedido-modal.component';
import { ViewClienteModalComponent } from './pages/modals/cliente-modal/view-cliente-modal.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LojasComponent } from './pages/lojas/lojas.component';
import { LojaObservableComponent } from './pages/observables/loja-observable/loja-observable.component';

//Define o padrão para brasileiro
registerLocaleData(ptBR)

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientesComponent,
    PedidosComponent,
    ProdutosComponent,
    ClienteObservableComponent,
    ProdutoObservableComponent,
    PedidoObservableComponent,
    CpfPipe,
    CepPipe,
    TelefonePipe,
    ViewClienteModalComponent,
    EditClienteModalComponent,
    CreateClienteModalComponent,
    DeleteClienteModalComponent,
    DeleteProdutoModalComponent,
    CreateProdutoModalComponent,
    EditProdutoModalComponent,
    ViewProdutoModalComponent,
    ViewPedidoModalComponent,
    CreatePedidoModalComponent,
    EditPedidoModalComponent,
    DeletePedidoModalComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LojasComponent,
    LojaObservableComponent,
    ViewLojaModalComponent,
    EditLojaModalComponent,
    CreateLojaModalComponent,
    DeleteLojaModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //Importa o local para padrão português
    { provide: LOCALE_ID, useValue: 'pt'},
    //Importa o padrão de moeda para R$
    { 
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
