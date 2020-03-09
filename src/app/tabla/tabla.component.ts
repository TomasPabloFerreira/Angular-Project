import { User } from './../models/user.model';
import { PlaceholderService } from './../services/placeholder.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaDataSource } from './tabla-datasource';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<User>;
  dataSource: TablaDataSource;

  constructor(private userService: PlaceholderService, private router: Router) { };

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'username', 'email', 'phone', 'website', 'company', 'actions'];

  // Editing data
  editing = false;
  userEditing = null;

  ngOnInit() {
    this.dataSource = new TablaDataSource(this.userService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  editUser(id: number) {
    this.router.navigate(["address/edit/"+id]);
    this.userEditing = id;
    this.editing = true;
  }
  confirmEdit(id: number) {
    this.editing = false;
    this.userEditing = null;
  }
}
