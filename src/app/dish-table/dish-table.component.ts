import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DishTableDataSource } from './dish-table-datasource';

@Component({
  selector: 'app-dish-table',
  templateUrl: './dish-table.component.html',
  styleUrls: ['./dish-table.component.css']
})
export class DishTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DishTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price'];

  ngAfterViewInit() {
    this.dataSource = new DishTableDataSource(this.paginator, this.sort);
  }
}
