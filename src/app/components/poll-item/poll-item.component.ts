import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poll-item',
  templateUrl: './poll-item.component.html',
  styleUrls: ['./poll-item.component.scss'],
})
export class PollItemComponent implements OnInit {
  @Input() poll: any;
  constructor() {}

  ngOnInit() {
    console.log(this.poll);
  }
}
