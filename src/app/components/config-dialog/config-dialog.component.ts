import { IssueService } from './../../services/issue.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-config-dialog',
  templateUrl: './config-dialog.component.html',
  styleUrls: ['./config-dialog.component.scss'],
})
export class ConfigDialogComponent implements OnInit {
  username = '';
  repositoryName = '';
  constructor(
    public dialogRef: MatDialogRef<ConfigDialogComponent>,
    private _issueService: IssueService) {}
  ngOnInit(): void {}

  cancel(): void {
    this.dialogRef.close();
  }

  // onSaveHandler() {
  //   console.log(this.username);
  //   console.log(this.repositoryName);
  //   this._issueService.defaultUsername = this.username;
  //   this._issueService.defaultProject = this.repositoryName;
  // }
}
