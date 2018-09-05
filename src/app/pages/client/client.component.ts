import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ClientService } from './client.service';
import { RoundPipe } from '../../pipes/round.pipe';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  currentPage = 1;
  selectClient: Client;
  clientsList: Array<Client>;
  totalResults: number;
  showInfo = false;
  pages: number[] = [];
  constructor(
    private selectPageService: SharedService,
    private clientService: ClientService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.selectPageService.setSelectPage('Client');
    this.loadData();
  }

  loadData() {
    this.alertService.loadData('Cargando datos de los clientes', '¡¡En un instante accederás!!');
    this.clientService.getAll(this.currentPage).subscribe(data => {
      this.clientsList = data.items;
      console.log(this.clientsList);
      this.totalResults = data.total_count;
      let pages = this.totalResults / 10;
      if (this.totalResults % 10 > 0) {
        pages++;
      }

      this.pages = Array(new RoundPipe().transform(pages, 0)).fill(0);
      this.showInfo = true;
      this.alertService.closeAlert();
    });
  }

  selectPage(select) {
    console.log(select);
    this.currentPage = select;
    this.loadData();
  }
}
