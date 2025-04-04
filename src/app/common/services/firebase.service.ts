import {inject, Injectable} from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private firestore: Firestore = inject(Firestore);

  constructor() { }

  getTickets<T>(path: string)  {
    const item = collection(this.firestore, path)
    return collectionData(item) as Observable<T[]>;
  }
}
