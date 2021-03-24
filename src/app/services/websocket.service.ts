import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  socket : any;
  server = "http://localhost:3000"
  constructor() {
    this.socket = (io as any)(this.server)
  }
  listen(eventName:String){
    return new Observable((Subscriber)=>{
      this.socket.on(eventName, (data: any)=>{
        Subscriber.next(data);
      })
    })
  }

  emit(eventName:String, data:any){
    this.socket.emit(eventName, data);
  }

}