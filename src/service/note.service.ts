import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  public note: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public lang: BehaviorSubject<string> = new BehaviorSubject<string>('ru');
}
