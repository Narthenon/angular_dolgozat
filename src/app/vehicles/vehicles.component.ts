/*
 * File: vehicles.component.ts
 * Author: Barabás Gergő
 * Copyright: 2022, Narthenon
 * Group: Szoft N/2
 * Date: 2022-02-24
 * Github: https://github.com/Narthenon/
 * Licenc: GNU GPL
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
    vehicles!: any;
    constructor(
      private plate: string,
      private brand: string,
      private year: number,
      private price: number,
      private sold: boolean) {}

  ngOnInit(): void {
  }

}
