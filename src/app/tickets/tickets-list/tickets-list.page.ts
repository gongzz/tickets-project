import { Component, OnInit } from '@angular/core';
import {IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {FirebaseService} from "../../common/services/firebase.service";
import {TicketI} from "../../common/models/ticket";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.page.html',
  styleUrls: ['./tickets-list.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    NgForOf
  ]
})
export class TicketsListPage implements OnInit {
  tickets: any[] = [];

  constructor(private firestoreService: FirebaseService) { }

  ngOnInit() {
    this.listarTickets();
  }

  listarTickets() {
    this.firestoreService.getTickets<TicketI>('tickets-soporte').subscribe(data => {
      if (data) {
        this.tickets = data;
      }
    })
  }

}
