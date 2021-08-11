import { Injectable ,EventEmitter} from '@angular/core';
import { Room } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class EmitSomethingService {
  roomInfoEmitter:EventEmitter<Room> = new EventEmitter();
  constructor() { }
}
