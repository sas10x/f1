import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { Customer } from 'src/app/shared/model/Customer';
import { TableUtil } from './tableUtil';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
  date = null;
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  total : number = 1;
  customers: Customer[];
  constructor(private http: HttpClient, private datepipe: DatePipe) { }
  baseUrl: string = "http://localhost:5000/api/employees/answers/";
  // baseUrl: string = "http://heusc:8000/api/employees/answers/";
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

  // exportTable() {
  //   TableUtil.exportTableToExcel("ExampleMaterialTable");
  // }

  exportNormalTable() {
    TableUtil.exportTableToExcel("ExampleNormalTable");
  }

  // exportArray() {
  //   const onlyNameAndSymbolArr: this.customers = this.dataSource.map(x => ({
  //     name: x.name,
  //     symbol: x.symbol
  //   }));
  //   TableUtil.exportArrayToExcel(onlyNameAndSymbolArr, "ExampleArray");
  // }
  onChange(result: Date): void {
    var from =this.datepipe.transform(result, 'yyyy-MM-dd');
    // this.to =this.datepipe.transform(result[1], 'MM/dd/yyyy');
    console.log('onChange: ', result.toISOString());
   
    this.getCustomers(from.toString()).subscribe(
      res => {
        this.customers = res;
        console.log(this.customers)
        this.loading = false}
    )
  }
}
