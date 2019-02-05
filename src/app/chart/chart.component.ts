import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  dataSource_red: Object;
  chartConfig_red: Object;
  dataSource_blue: Object;
  chartConfig_blue: Object;
  dataSource_green: Object;
  chartConfig_green: Object;
  dataSource: Object;
  chartConfig: Object;
  selectedFile: File;

  multiArray = [];
  jan_red = 0; jan_green = 0; jan_blue = 0;
  feb_red = 0; feb_green = 0; feb_blue = 0;
  mar_red = 0; mar_green = 0; mar_blue = 0;
  jan = 0; feb = 0; mar = 0;
  datas = [];
  datas_red = [];
  datas_green = [];
  datas_blue = [];
  reason;
  errorCount = 0;
  id;

  constructor(private http: Http, private httpC: HttpClient, private router: Router) {
  }

  ngOnInit() {
    const current_month = new Date().getUTCMonth();
    const month = this.months[current_month];
    const urlArray = this.router.url.split('/');
    this.id = urlArray[urlArray.length - 1];

    this.chartConfig_red = {
      width: '700',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
    };
    this.chartConfig_blue = {
      width: '700',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
    };
    this.chartConfig_green = {
      width: '700',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
    };
    this.chartConfig = {
      width: '700',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
    };

    const qID = this.id; 
    // id
    this.http.get(`http://localhost:3000/coodinates/${qID}`).toPromise().then(res => {
      const resl = res.json();
      console.log(resl);
      for(const data of resl) {
        console.log(data.coordinates);
        const arrry = data.coordinates
        this.multiArray = [...this.multiArray, ...arrry]
        console.log(this.multiArray)
      }
    }).then(re => {
      
    });
    setTimeout(() => { 
      for (const arr of this.multiArray) {
        if (arr.type === 'red') {
          if (arr.month === 'JAN') {
            this.jan_red = this.jan_red + arr.count;
            this.datas_red.push({
              label: 'Jan',
              value: this.jan_red
            });
          } else if (arr.month === 'FEB') {
            this.feb_red = this.feb_red + arr.count;
            this.datas_red.push({
              label: 'Feb',
              value: this.feb_red
            });
          } else if (arr.month === 'MAR') {
            this.mar_red = this.mar_red + arr.count;
            this.datas_red.push({
              label: 'Mar',
              value: this.mar_red
            });
          }
        } else if (arr.type === 'green') {
          if (arr.month === 'JAN') {
            this.jan_green = this.jan_green + arr.count;
            this.datas_green.push({
              label: 'Jan',
              value: this.jan_green
            });
          } else if (arr.month === 'FEB') {
            this.feb_green = this.feb_green + arr.count;
            this.datas_green.push({
              label: 'Feb',
              value: this.feb_green
            });
          } else if (arr.month === 'MAR') {
            this.mar_green = this.mar_green + arr.count;
            this.datas_green.push({
              label: 'Mar',
              value: this.mar_green
            });
          }
        } else if (arr.type === 'blue') {
          if (arr.month === 'JAN') {
            this.jan_blue = this.jan_blue + arr.count;
            this.datas_blue.push({
              label: 'Jan',
              value: this.jan_blue
            });
          } else if (arr.month === 'FEB') {
            this.feb_blue = this.feb_blue + arr.count;
            this.datas_blue.push({
              label: 'Feb',
              value: this.feb_blue
            });
          } else if (arr.month === 'MAR') {
            this.mar_blue = this.mar_blue + arr.count;
            this.datas_blue.push({
              label: 'Mar',
              value: this.mar_blue
            });
          }
        }
  
        // get Month
        if (arr.month === month) {
          this.errorCount = this.errorCount + arr.count;
        }
        // For All
  
  
        if (arr.month === 'JAN') {
          this.jan = this.jan + arr.count;
          this.datas.push({
            label: 'Jan',
            value: this.jan
          });
        } else if (arr.month === 'FEB') {
          this.feb = this.feb + arr.count;
          this.datas.push({
            label: 'Feb',
            value: this.feb
          });
        } else if (arr.month === 'MAR') {
          this.mar = this.mar + arr.count;
          this.datas.push({
            label: 'Mar',
            value: this.mar
          });
        }
  
      }
  
      this.dataSource_red = {
        chart: {
          caption: 'Countries With Most Oil Reserves [2017-18]',
          xAxisName: 'Months',
          yAxisName: 'Count',
          numberSuffix: '',
          theme: 'fusion',
        },
        data: [
          {
            label: 'Jan',
            value: this.jan_red
          },
          {
            label: 'Feb',
            value: this.feb_red
          },
          {
            label: 'Mar',
            value: this.mar_red
          }
        ]
      };
      this.dataSource_blue = {
        chart: {
          caption: 'Countries With Most Oil Reserves [2017-18]',
          xAxisName: 'Months',
          yAxisName: 'Count',
          numberSuffix: '',
          theme: 'fusion',
        },
        data: [
          {
            label: 'Jan',
            value: this.jan_blue
          },
          {
            label: 'Feb',
            value: this.feb_blue
          },
          {
            label: 'Mar',
            value: this.mar_blue
          }
        ]
      };
      this.dataSource_green = {
        chart: {
          caption: 'Countries With Most Oil Reserves [2017-18]',
          xAxisName: 'Months',
          yAxisName: 'Count',
          numberSuffix: '',
          theme: 'fusion',
        },
        data: [
          {
            label: 'Jan',
            value: this.jan_green
          },
          {
            label: 'Feb',
            value: this.feb_green
          },
          {
            label: 'Mar',
            value: this.mar_green
          }
        ]
      };
  
      this.dataSource = {
        chart: {
          caption: 'Countries With Most Oil Reserves [2017-18]',
          xAxisName: 'Months',
          yAxisName: 'Count',
          numberSuffix: '',
          theme: 'fusion',
        },
        data: [
          {
            label: 'Jan',
            value: this.jan
          },
          {
            label: 'Feb',
            value: this.feb
          },
          {
            label: 'Mar',
            value: this.mar
          }
        ]
      };

    }, 3000);
    
  }



  sendAlert() {
    console.log(this.reason);
    const current_date = new Date().getTime();
    const alert = {
      reason: this.reason,
      createsDate: current_date,
      status: 'proccessing',
      errorCount: this.errorCount,
      qualityCheckerID: this.id
    };
    console.log(alert);
    this.http.post('http://localhost:3000/alerts', alert).subscribe(res => {
      console.log(res);
      this.reason = '';
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload() {
    // this.http is the injected HttpClient
    const fd = new FormData();
    fd.append('imageUrl', this.selectedFile, this.selectedFile.name);
    this.http.patch(`http://localhost:3000/user/imageurl/${this.id}`, fd).subscribe(
      //map the success function and alert the response
       (success) => {
               alert(success);
      },
      (error) => alert(error));


  }

}
