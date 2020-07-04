import { Component, OnInit} from '@angular/core';
import {QuickLunchService } from '../services/quick-lunch.service';
import {Food } from '../models/food.interface';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Burgers', cols: 2, rows: 2 , id: 'brg'},
        { title: 'Pizza', cols: 2, rows: 2, id: 'piz' },
        { title: 'galettes', cols: 2, rows: 2, id: 'gal' }
      ];
    })
  );

  burgers: Food [];
  pizzas: Food [];
  galettes: Food [];

  constructor(private breakpointObserver: BreakpointObserver, private lunchService: QuickLunchService ) {}
    ngOnInit() {
      this.burgers = this.lunchService.getBurgers();
      this.pizzas = this.lunchService.getPizza();
      this.galettes = this.lunchService.getGalette();
    }

}
