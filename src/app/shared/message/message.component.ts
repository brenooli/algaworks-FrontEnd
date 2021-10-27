import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div id="username-help" *ngIf="temErro()" >
        <small class="p-error" >{{ text }}.</small>
    </div>
  `,
  styles: []
})
export class MessageComponent {

  @Input() error: string = '';
  @Input() control: any;
  @Input() text: string = '';


  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
