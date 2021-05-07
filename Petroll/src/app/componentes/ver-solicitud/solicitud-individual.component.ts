import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud-individual.component.html',
  styleUrls: ['./solicitud-individual.component.css']
})
export class SolicitudIndividualComponent implements OnInit {

  constructor(private backend: BackendService, private router: Router) {}

  ngOnInit() {
  }

  login(){

    this.router.navigate(['login']);

  }
}
