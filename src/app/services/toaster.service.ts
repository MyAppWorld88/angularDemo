import { Injectable, inject } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  messages: Message[] | undefined;
  constructor(private messageService: MessageService) {
   
   }
  showSuccess(message:any) {
    this.messageService.add( {severity:'success', summary: 'Success', detail:message});
    // {severity:'success', summary:'Service Message', detail:'Via MessageService'}
    // {severity:'success', summary: 'Success', detail:message}
  }

  showError(message:any) {
    this.messageService.add({severity:'error', summary: 'Error', detail:message});
  }

  showInfo(message:any) {
    this.messageService.add({severity:'info', summary: 'Info', detail:message});
  }

  showWarning(message:any) {
    this.messageService.add({severity:'warn', summary: 'Warning', detail:message});
  } 
}
