import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NoteService } from '../../service/note.service';

@Component({
  selector: 'app-home-ru',
  templateUrl: './home-ru.component.html',
  styleUrls: ['./home-ru.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeRuComponent implements OnInit {
  public usdtTrc20: string = 'TEW8w3TFYtxjxQFggBJsLqjr4vLCWxP9SS';
  public usdtErc20: string = '0x64227D7a5A726985f0F86c410E2AA8827ff3b062';
  public busdBep20: string = '0x64227D7a5A726985f0F86c410E2AA8827ff3b062';
  public btcBtc: string = 'bc1qjuc7slty44y40gkz4lpgf4c5dxz7fntydn7dlw';
  public ethErc20: string = '0x64227D7a5A726985f0F86c410E2AA8827ff3b062';

  constructor(
    private _noteService: NoteService
  ) {
  }

  public ngOnInit(): void {
    this._noteService.lang.next('ru');
  }

  public createNote(): void {
    this._noteService.note.next(true);
  }

  public scroll(el: HTMLElement): void {
    el.scrollIntoView();
  }
}
