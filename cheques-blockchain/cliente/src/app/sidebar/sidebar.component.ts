import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Mi Chequera',         icon:'nc-bank',       class: '' },
    { path: '/cheques',         title: 'Mis Cheques',        icon:'nc-tile-56',    class: '' },
  { path: '/login',         title: 'Cerrar Sesión',        icon:'nc-single-02',     class: 'active-pro' },


];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
