import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import { Confirm } from '../interfaces/confirm.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() {}

  successData() {
    swal('Good job!', 'You clicked the button!', 'success');
  }

  loadData(title, html) {
    swal({
      title: title,
      html: html,
      onOpen: () => {
        swal.showLoading();
      }
    }).then(result => {
      if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer');
      }
    });
  }

  closeAlert() {
    swal.close();
  }

  confirm(data: Confirm) {
    return swal({
      title: data.title,
      text: data.text,
      type: data.type,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, close session!'
    });
  }
}
