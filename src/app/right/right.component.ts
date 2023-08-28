import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog'
import { LeftComponent } from '../left/left.component';
import { FormControl, Validators } from '@angular/forms';
import { NewService } from '../services/new.service';
import { MatPaginator, } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'mobilenumber', 'education', 'gender', 'id'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;


  constructor(private _dialog: MatDialog, private service: NewService) { }

  ngOnInit(): void {
    this.get()
  }

  edit() {
    this._dialog.open(LeftComponent)
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  get() {
    
    this.service.getdata().subscribe({

      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);

        this.dataSource.sort = this.sort;

        this.dataSource.paginator = this.paginator;
           
        

      },
      error: console.log
      
    })

  }
}
