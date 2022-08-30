import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ 'RTX 4080ti' ],
    precio: [ 0 ],
    existencias: [ 0 ]
  })

  constructor( private fb: FormBuilder) { } 

}
