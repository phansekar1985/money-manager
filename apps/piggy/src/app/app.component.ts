import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'money-manager-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'piggy1';

  ngOnInit(): void {
    console.log('was called!');
  }
}
