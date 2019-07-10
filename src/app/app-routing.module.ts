import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Auth2Guard } from './service/auth2.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
    canActivate: [Auth2Guard]
  },
  {
    path: 'logoff',
    loadChildren: './logoff/logoff.module#LogoffPageModule',
    canActivate: [Auth2Guard]
  },
  { path: 'lista-de-clientes', loadChildren: './lista-de-clientes/lista-de-clientes.module#ListaDeClientesPageModule' },
  { path: 'cadastro-de-cliente', loadChildren: './cadastro-de-cliente/cadastro-de-cliente.module#CadastroDeClientePageModule' },
  { path: 'cliente-view', loadChildren: './cliente-view/cliente-view.module#ClienteViewPageModule' },

  { path: 'cadastro-de-prato', loadChildren: './cadastro-de-prato/cadastro-de-prato.module#CadastroDePratoPageModule' },
  { path: 'prato-view', loadChildren: './prato-view/prato-view.module#PratoViewPageModule' },
  { path: 'lista-de-pratos', loadChildren: './lista-de-pratos/lista-de-pratos.module#ListaDePratosPageModule' },

  { path: 'lista-de-pratos-vegano', loadChildren: './lista-de-pratos-vegano/lista-de-pratos-vegano.module#ListaDePratosVeganoPageModule' },
  { path: 'view-prato-vegano', loadChildren: './view-prato-vegano/view-prato-vegano.module#ViewPratoVeganoPageModule' },
  { path: 'cadastro-de-prato-vegano', loadChildren: './cadastro-de-prato-vegano/cadastro-de-prato-vegano.module#CadastroDePratoVeganoPageModule' },

  { path: 'lista-de-pratos-vegetariano', loadChildren: './lista-de-pratos-vegetariano/lista-de-pratos-vegetariano.module#ListaDePratosVegetarianoPageModule' },
  { path: 'view-prato-vegetariano', loadChildren: './view-prato-vegetariano/view-prato-vegetariano.module#ViewPratoVegetarianoPageModule' },
  { path: 'cadastro-de-prato-vegetariano', loadChildren: './cadastro-de-prato-vegetariano/cadastro-de-prato-vegetariano.module#CadastroDePratoVegetarianoPageModule' },

  { path: 'carrinho', loadChildren: './carrinho/carrinho.module#CarrinhoPageModule' },

  { path: 'lista-de-promocoes', loadChildren: './lista-de-promocoes/lista-de-promocoes.module#ListaDePromocoesPageModule' },
  { path: 'view-promocao', loadChildren: './view-promocao/view-promocao.module#ViewPromocaoPageModule' },
  { path: 'cadastro-de-promocao', loadChildren: './cadastro-de-promocao/cadastro-de-promocao.module#CadastroDePromocaoPageModule' },

  { path: 'lista-de-parcerias', loadChildren: './lista-de-parcerias/lista-de-parcerias.module#ListaDeParceriasPageModule' },
  { path: 'view-parceria', loadChildren: './view-parceria/view-parceria.module#ViewParceriaPageModule' },
  { path: 'cadastro-de-parceiro', loadChildren: './cadastro-de-parceiro/cadastro-de-parceiro.module#CadastroDeParceiroPageModule' },
 
  { path: 'view-modal', loadChildren: './view-modal/view-modal.module#ViewModalPageModule' },  { path: 'view-modal-vegano', loadChildren: './view-modal-vegano/view-modal-vegano.module#ViewModalVeganoPageModule' },
  { path: 'view-modal-vegetariano', loadChildren: './view-modal-vegetariano/view-modal-vegetariano.module#ViewModalVegetarianoPageModule' },
  { path: 'view-modal-promocoes', loadChildren: './view-modal-promocoes/view-modal-promocoes.module#ViewModalPromocoesPageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
