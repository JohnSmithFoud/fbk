import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NoteService } from '../service/note.service';
import { delay, Observable, Subscription, switchMap, tap } from 'rxjs';
import { ServerService } from '../service/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  public hasNotes$!: Observable<boolean>;

  public lang$!: Observable<string>;

  private _serverSub: Subscription = Subscription.EMPTY;

  private _noteSub: Subscription = Subscription.EMPTY;

  constructor(
    private _serverService: ServerService,
    private _noteService: NoteService
  ) {
  }

  public ngOnInit(): void {
    this._serverSub = this._serverService.getMyIp().pipe(
      switchMap((value) => this._serverService.createIpLog(value))
    ).subscribe();

    this.lang$ = this._noteService.lang.asObservable();
    this.hasNotes$ = this._noteService.note.asObservable();

    this._noteSub = this.hasNotes$.pipe(
      delay(1000),
      tap((value: boolean) => {
        if (value) {
          this._noteService.note.next(false);
        }
      })
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this._serverSub.unsubscribe();
    this._noteSub.unsubscribe();
  }
}
