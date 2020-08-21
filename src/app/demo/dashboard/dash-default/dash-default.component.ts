import { Component, OnInit, ViewChild } from '@angular/core';
import { SupportChartData1} from './chart/support-chart-data-1';
import { SupportChartData2} from './chart/support-chart-data-2';
import { SeoChart1 } from './chart/seo-chart-1';
import { SeoChart2 } from './chart/seo-chart-2';
import { SeoChart3 } from './chart/seo-chart-3';
import { PowerCardChart1 } from './chart/power-card-chart-1';
import { PowerCardChart2 } from './chart/power-card-chart-2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dash-default',
  templateUrl: './dash-default.component.html',
  styleUrls: ['./dash-default.component.scss']
})
export class DashDefaultComponent implements OnInit {
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;

  public userInfo;
  public defaulClass = '12a1';
  private isAZ = false;
  private is19 = false;
  public listStudent;
  private listStudentBackup = [
    {
      id: 1,
      fullname: 'Vu Phuong Hoai Dan',
      sex: 'Nu',
      address: 'Quan 11',
      faName: 'Vu Van A',
      moName: 'Vu Thi B',
      phone: '01239865113',
      birthday: '13/05/1997',
      class: '12a1'
    },
    {
      id: 2,
      fullname: 'Bui Xuan Bach',
      sex: 'Nam',
      address: 'Quan 1',
      faName: 'Bui Van A',
      moName: 'Bui Thi B',
      phone: '01239865113',
      birthday: '13/05/1997',
      class: '12a2'
    },
    {
      id: 3,
      fullname: 'Ly Gia Bao',
      sex: 'Nam',
      address: 'Quan 2',
      faName: 'Ly Van A',
      moName: 'Ly Thi B',
      phone: '01239865113',
      birthday: '13/05/1997',
      class: '12a3'
    },
    {
      id: 4,
      fullname: 'Nguyen Ngoc Chau',
      sex: 'Nam',
      address: 'Quan 3',
      faName: 'Nguyen Van A',
      moName: 'Nguyen Thi B',
      phone: '01239865113',
      birthday: '13/05/1997',
      class: '12a1'
    }
  ];

  public isadd = false;
  public issearch = false;
  public studentForm: FormGroup;
  public keyword;

  public dateTime1: Date; 

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
    this.userInfo = JSON.parse(localStorage.getItem('USER_ifo'));

    this.studentForm = this.formBuilder.group({
      fullname: [''],
      sex: ['Nu'],
      birthday: [''],
      provin: ['Choose...'],
      district: [''],
      number: [''],
      faName: [''],
      moName: [''],
      phone: [''],
      class: ['12a1']
    });

    this.listStudent = Object.assign([], this.listStudentBackup);
    this.chooseClass(this.defaulClass);
  }

  ngOnInit() {
  }

  gotoadd() {
    this.issearch = false;
    this.isadd = !this.isadd;
  }

  gotosearch() {
    this.issearch = !this.issearch;
    this.isadd = false;
  }

  chooseClass(key) {
    this.defaulClass = key;
    this.listStudent = this.listStudentBackup;
    this.listStudent = this.listStudent.filter(val => val.class === key);
  }

  search() {
    this.listStudent = this.listStudent.filter(val => val.fullname.toLowerCase().includes(this.keyword.toLowerCase()));
  }
  
  reload(isReload?) {
    if(!this.keyword || isReload){
      this.listStudent = this.listStudentBackup;  
    }
  }

  sort(key) {
    if(key === 'no' ) {
      if(!this.is19) {
        this.listStudent.sort((val1: any,val2: any) => {
          return val1.id < val2.id? -1 : val1.id > val2.id? 1 : 0;
        });
        this.is19 = true;
      } else {
        this.listStudent.sort((val1: any,val2: any) => {
          return val1.id > val2.id? -1 : val1.id < val2.id? 1 : 0;
        });
        this.is19 = false;
      }
    } else {
      if(!this.isAZ) {
        this.listStudent.sort((val1: any,val2: any) => {
          return val1.fullname < val2.fullname? -1 : val1.fullname > val2.fullname? 1 : 0;
        });
        this.isAZ = true;
      } else {
        this.listStudent.sort((val1: any,val2: any) => {
          return val1.fullname > val2.fullname? -1 : val1.fullname < val2.fullname? 1 : 0;
        });
        this.isAZ = false;
      }
    }
  }

  back() {
    this.isadd = false;
    this.issearch = false;
  }

  add() {
    const data = {
      id: this.listStudent.length + 1,
      fullname: this.studentForm.controls['fullname'].value,
      sex: this.studentForm.controls['sex'].value,
      address: '' + this.studentForm.controls['number'].value + '-' + this.studentForm.controls['district'].value + '-' + this.studentForm.controls['provin'].value,
      faName: this.studentForm.controls['faName'].value,
      moName: this.studentForm.controls['moName'].value,
      phone: this.studentForm.controls['phone'].value,
      birthday: this.studentForm.controls['birthday'].value,
      class: this.studentForm.controls['class'].value,
    }
    this.listStudent.push(data);
    this.listStudentBackup.push(data);
  }
}
