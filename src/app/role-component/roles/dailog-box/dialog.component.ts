
import { Component ,ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dialog',
  // standalone: true,
  templateUrl: './dialog.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  close() {
  }
}