import { validLoginPick } from './../../utils/validations';
import { IssueService } from './../../services/issue.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  defaultUsername = 'erickcu1416';
  defaultProject = 'socket-server-v2';

  @ViewChild('searchInput', { static: true })
  searchInput!: ElementRef;

  issuesData: any[] = [];
  issues: any[] = [];

  loading = true;

  constructor(private _issueService: IssueService) {}

  ngOnInit(): void {
    this.consult();
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        this.searchHandler(text);
      });
  }

  consult() {
    this._issueService.getAllIssues(this.defaultUsername, this.defaultProject).subscribe((d: any) => {
      this.issues = d;
      if (this.loading) {
        this.searchHandler('');
        this.loading = false;
      }
    });
  }

  searchHandler(text: string) {
    if (!text) {
      this.issuesData = this.issues;
      return;
    }

    const v = text.toLowerCase();

    const copyIssues = this.issues;
    this.issuesData = copyIssues.filter(
      (x) =>
        x.title.toLowerCase().includes(v) ||
        x.body.toLowerCase().includes(v) ||
        validLoginPick(x.assignee || {}, v)
    );
  }

  onChangeRepositoryHandler(event: any) {
    const {username, repositoryName} = event;
    this.defaultProject = repositoryName;
    this.defaultUsername = username;
    this.loading = true;
    this.consult();
  }
}
