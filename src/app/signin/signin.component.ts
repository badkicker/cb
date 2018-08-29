import { Component, OnInit } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { IModalDialog, IModalDialogOptions, IModalDialogButton } from 'ngx-modal-dialog';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements IModalDialog {

  actionButtons: IModalDialogButton[];
 
  constructor() {
    this.actionButtons = [
      { text: 'Close' }, // no special processing here
      { text: 'I will always close', onAction: () => true },
      { text: 'I never close', onAction: () => false }
    ];
  }
  // ngOnInit() {
  // }

  dialogInit( reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    // no processing needed
   
  }

  onClose(){
    console.log('hi');
   return true
   
    
    // this.close();
    
  }
}
