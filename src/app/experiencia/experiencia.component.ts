import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { SExperienciaService } from '../service/s-experiencia.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    //si estamos logeados o no
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la educacion");
        }
      )

    }
  }
}
