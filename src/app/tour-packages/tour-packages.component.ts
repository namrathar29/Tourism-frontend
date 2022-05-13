import { Component, OnInit } from '@angular/core';
import {tourslist} from '../tour-details.mock';
// import {detailslist} from '../tour-details.mock';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-tour-packages',
  templateUrl: './tour-packages.component.html',
  styleUrls: ['./tour-packages.component.css']
})

export class TourPackagesComponent implements OnInit {

  constructor(private dialogRef : MatDialog) { }
  openDialog(){
    this.dialogRef.open(RegisterComponent);
  }

  ngOnInit(): void {
  }

  tours = tourslist;
  // detailsOfPackages = detailslist;

  panelOpenState = false;


  
}
