import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  configuration;
  columns = [
    { key: 'phone', title: 'Phone' },
    { key: 'age', title: 'Age' },
    { key: 'company', title: 'Company' },
    { key: 'name', title: 'Name' },
    { key: 'isActive', title: 'STATUS' },
  ];

  data = [{
    phone: '+1 (934) 551-2224',
    age: 20,
    address: { street: 'North street', number: 12 },
    company: 'ZILLANET',
    name: 'Valentine Webb',
    isActive: false,
  }, {
    phone: '+1 (948) 460-3627',
    age: 31,
    address: { street: 'South street', number: 12 },
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }];
  people: any[] = [];
  peopleColumns = [
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'regDate', title: 'Register Date' },
    { key: 'city', title: 'City' },
    { key: 'age', title: 'Age' },
  ];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.configuration = ConfigurationService._config;
    this.http.get('assets/data/people.json')
    .subscribe((res: any) => this.people = res);
  }

}
