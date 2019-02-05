import { ManagerEditprofileComponent } from './../manager-editprofile/manager-editprofile.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// import { test1 } from '../../assets/javascript/main'; 
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog:MatDialog,
  ) { 
    // console.log(test1());
  }

  ngOnInit() {
  }
  // public onClick() {
  //   // this.router.navigate(['\bra']);
  // }


  openDialog() {
    const dialogRef = this.dialog.open(ManagerEditprofileComponent,{
      // width: '800px', 
      // height:'500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
   
    });

}

  
}

 
 