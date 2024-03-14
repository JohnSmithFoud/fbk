import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NoteService } from '../service/note.service';
import { delay, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  public hasNotes$!: Observable<boolean>;

  public lang$!: Observable<string>;

  private _sub: Subscription = Subscription.EMPTY;

  constructor(
    private _noteService: NoteService
  ) {
  }

  public ngOnInit(): void {
    this.lang$ = this._noteService.lang.asObservable();
    this.hasNotes$ = this._noteService.note.asObservable();

    this._sub = this.hasNotes$.pipe(
      delay(1000),
      tap((value: boolean) => {
        if (value) {
          this._noteService.note.next(false);
        }
      })
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
