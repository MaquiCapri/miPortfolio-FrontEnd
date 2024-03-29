import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  fecha: string = '';
  curso: string = '';
  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.fecha, this.curso);
    this.sExperiencia.save(expe).subscribe(data => {
      alert("Educación añadida");
      this.router.navigate(['curriculum']);
    }, err => {
      alert("Falló");
      this.router.navigate(['curriculum']);

    })

  }
}
