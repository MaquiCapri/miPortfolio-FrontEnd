import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  irInicio(){
    this.router.navigate(['']);
  }

}
