import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import { Confirm } from '../interfaces/confirm.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() {}

  /**
   * Function to show alert message with good job info!
   */
  successData() {
    swal('Good job!', 'You clicked the button!', 'success');
  }

  /**
   * Create dinamically alert with title and html content
   * @param title String to contain title of alert
   * @param html alert dialog html content to show info
   */
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

  /**
   * Close select alert
   */
  closeAlert() {
    swal.close();
  }

  /**
   * Take dinamically confirm data alert with pass confirm data
   * @param data Confirm data object to generate alert
   */
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
