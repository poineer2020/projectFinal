import { Http } from '@angular/http';
import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  id: any
  constructor(private registerService: RegisterService, private htpp: Http) { }

  ngOnInit() {
    this.id = localStorage.getItem('uid')
    this.htpp.get(`http://localhost:3000/user/${this.id}`).subscribe(ress => {
      console.log(ress.json())
    })
  }

  /*onClickUpdate(eventid: number,event) {
    if (confirm("Are you sure to update this event?")) {
      this.editUser(this.id);
      alert("Successfully Updated")
    }
  }*/

  updateEvent() {
    this.registerService.editUser(this.id)
      .subscribe(
        data => {
       });

   }

}
