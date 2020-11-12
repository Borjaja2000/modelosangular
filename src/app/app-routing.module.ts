import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NumerosComponent } from
'./../components/numeros/numeros.component';
const appRoutes: Routes = [
    { path: "collatz/:numero", component: NumerosComponent }
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);

