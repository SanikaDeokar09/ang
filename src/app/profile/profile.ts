import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {

  user:any;

  ngOnInit(): void {

    const data:any = localStorage.getItem('user');

    this.user = JSON.parse(data);
  }
}