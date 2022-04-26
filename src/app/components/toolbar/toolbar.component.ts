import { ConfigDialogComponent } from './../config-dialog/config-dialog.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output () onChangeRepository: EventEmitter<string> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openConfig() {
    const dialogRef = this.dialog.open(ConfigDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      // TODO: Esto se puede mejorar con Redux
      this.onChangeRepository.emit(result);
    });
  }

}
