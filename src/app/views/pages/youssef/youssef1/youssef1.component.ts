import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { PeoplesData } from 'src/app/core/dummy-datas/peoples.data';


@Component({
  selector: 'app-youssef1',
  templateUrl: './youssef1.component.html',
  styleUrls: ['./youssef1.component.scss']
})
export class Youssef1Component implements OnInit {
  rows = [];
  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;
      
  constructor() {

   }

  ngOnInit(): void {
    this.rows = PeoplesData.peoples;
  }


}
