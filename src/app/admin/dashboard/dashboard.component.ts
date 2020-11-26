import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { Customer } from 'src/app/shared/model/Customer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  date = null;
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  total : number = 1;
  customers: Customer[];
  filterStatus = [
    { text: 'any', value: 'any' },
    { text: 'pending', value: 'pending' },
    { text: 'processing', value: 'processing' },
    { text: 'on-hold', value: 'on-hold' },
    { text: 'completed', value: 'completed' },
    { text: 'cancelled', value: 'cancelled' },
    { text: 'refunded', value: 'refunded' },
    { text: 'failed', value: 'failed' },
    { text: 'trash', value: 'trash' }
  ];
  constructor(private http: HttpClient) { }
  baseUrl: string = "http://localhost:8888/api/customer/visits/";
  ngOnInit() {
  }
  // getOrders() {
  //   let params = {}
  //   this.getOrders(params).subscribe(
  //     res => {this.total = parseInt(res.headers.get('X-WP-Total'));this.orders = res.body;this.loading = false;}
  //   )
  // }
  getCustomers(date) {
    let visitUrl = this.baseUrl+date;
    return this.http.get<any>(visitUrl);
  }
  // onQueryParamsChange(params: NzTableQueryParams): void {
  //   if (params.filter[0].value < 1) {
  //    params.filter[0].value = ["any"]
  //   }
  //   console.log(params.filter[0].value)
  //   this.loading = true;
  //   let wooparams = {
  //     "page": params.pageIndex,
  //     "per_page": params.pageSize,
  //     "status": params.filter[0].value
  //   }
  //   this.getOrders(wooparams).subscribe(
  //     res => {this.total = parseInt(res.headers.get('X-WP-Total'));this.customers = res.body;this.loading = false}
  //   )
  // }
  onChange(result: Date): void {
    console.log('onChange: ', result.toISOString());
    // let params = {
    //   date:result.toISOString()
    // }
    this.getCustomers(result.toISOString()).subscribe(
      res => console.log(res)
    )
  }
}
