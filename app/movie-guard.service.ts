import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";

export class MovieGuardService implements CanActivate {

    constructor() {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        return true;
    }
}