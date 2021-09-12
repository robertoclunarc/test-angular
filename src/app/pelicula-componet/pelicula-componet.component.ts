import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PeliculaComponetDataSource, PeliculaComponetItem } from './pelicula-componet-datasource';

@Component({
  selector: 'app-pelicula-componet',
  templateUrl: './pelicula-componet.component.html',
  styleUrls: ['./pelicula-componet.component.scss']
})
export class PeliculaComponetComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<PeliculaComponetItem>;
  dataSource: PeliculaComponetDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new PeliculaComponetDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
