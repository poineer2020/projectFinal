import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-intimate-view',
  templateUrl: './intimate-view.component.html',
  styleUrls: ['./intimate-view.component.css']
})
export class IntimateViewComponent implements OnInit {
  multiArray;
  type;
  id;
  imageUrl;
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    const urlArray = this.router.url.split('/');
    this.id = urlArray[urlArray.length - 1];

    this.http.get(`http://localhost:3000/coodinates/view/${this.id}`).subscribe(cood => {
      const data = cood.json();
      console.log(data)
      this.imageUrl = data.imageUrl;
      this.multiArray = data.coordinates;
      this.forLoopForCoodinates(this.multiArray);
    });
  }

  point_it(event) {
    const pos_x = event.offsetX;
    const pos_y = event.offsetY;
    console.log(pos_x);
    console.log(pos_y);
    const x = pos_x;
    const y = pos_y;
    if (0 <= x && x <= 82 && 0 <= y && y <= 76) {
      if (this.type === 'blue') {
        const index_blue = this.multiArray.findIndex(res => {
          return res.x === 41 && res.y === 38 && res.type === 'blue';
        });

        if (index_blue > -1) {
          const abc = this.multiArray[index_blue].count + 1;
          this.multiArray[index_blue].count = abc;
          this.forLoopForCoodinates(this.multiArray);
        } else {
          this.multiArray.push({ x: 41, y: 38, count: 1, type: 'blue' });
          this.forLoopForCoodinates(this.multiArray);
        }
      } else if (this.type === 'green') {
        const index_greem = this.multiArray.findIndex(res => {
          return res.x === 41 && res.y === 38 && res.type === 'green';
        });

        if (index_greem > -1) {
          const abc = this.multiArray[index_greem].count + 1;
          this.multiArray[index_greem].count = abc;
          this.forLoopForCoodinates(this.multiArray);
        } else {
          this.multiArray.push({ x: 41, y: 38, count: 1, type: 'green' });
          this.forLoopForCoodinates(this.multiArray);
        }
      } else if (this.type === 'red') {
        const index_red = this.multiArray.findIndex(res => {
          return res.x === 41 && res.y === 38 && res.type === 'red';
        });

        if (index_red > -1) {
          const abc = this.multiArray[index_red].count + 1;
          this.multiArray[index_red].count = abc;
          this.forLoopForCoodinates(this.multiArray);
        } else {
          this.multiArray.push({ x: 41, y: 38, count: 1, type: 'red' });
          this.forLoopForCoodinates(this.multiArray);
        }
      } else {
        alert('You have to pick one');
      }
    }

  }

  forLoopForCoodinates(array) {
    $('#pointer_div').empty();
    for (const arr of this.multiArray) {
      const map_ = document.getElementById('pointer_div');
      if (arr.type === 'blue') {
        const point_blue = $('<div id="map-point-blue"></div>');

        point_blue.css({
          left: arr.x + 'px',
          top: arr.y + 'px',
        });
        point_blue.text(arr.count);
        point_blue.appendTo(map_);

      } else if (arr.type === 'green') {
        const point_green = $('<div id="map-point-green"></div>');

        point_green.css({
          left: arr.x + 10 + 'px',
          top: arr.y + 10 + 'px',
        });
        point_green.text(arr.count);
        point_green.appendTo(map_);
      } else if (arr.type === 'red') {
        const point_red = $('<div id="map-point-red"></div>');

        point_red.css({
          left: arr.x + 20 + 'px',
          top: arr.y + 20 + 'px',
        });
        point_red.text(arr.count);
        point_red.appendTo(map_);
      }
    }
  }

  saveCoorfinates() {
    this.http.patch(`http://localhost:3000/coodinates/${this.id}`, this.multiArray).subscribe(res => {
      console.log(res);
    });
  }

  colorClick(event) {
    this.type = event.target.value;
  }
}
