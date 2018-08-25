import { SweetAlertType } from 'sweetalert2';

export interface Confirm {
  title: string;
  text: string;
  type: SweetAlertType;
  showCancelButton: Boolean;
  confirmButtonColor: string;
  cancelButtonColor: string;
  confirmButtonText: string;
}
