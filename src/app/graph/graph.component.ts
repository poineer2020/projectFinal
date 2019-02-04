import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ManagereditProfileComponent } from '../manageredit-profile/manageredit-profile.component';
import { SettingsComponent } from '../settings/settings.component';
// import { SettingsComponent } from '../settings/settings.component';
// import { test1 } from '../../assets/javascript/main'; 
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(
    public dialog:MatDialog
  ) { 
    // console.log(test1());
  }

  ngOnInit() { }
    openDialog() {
    const dialogRef = this.dialog.open(ManagereditProfileComponent,{
      width: '1000px', });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
   
    });

}
openDialog1() {
  const dialogRef = this.dialog.open(ManagereditProfileComponent,{
    width: '1000px', });
  dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit()
 
  });

}

}
  
  // public onClick() {
  //    this.router.navigate(['\bra']);
  // }







 
