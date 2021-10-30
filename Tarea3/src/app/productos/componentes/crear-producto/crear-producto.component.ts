import { Producto } from './../../../modelos/producto.interface';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  // un formulario
  form!: FormGroup;

  @Output() productoCreado = new EventEmitter<Producto>();

  valoresActivo = [
    { id: 1, label: 'Si' },
    { id: 2, label: 'No' }
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private activeModal: NgbModal
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(10)]],
      price: [1, [Validators.required, Validators.min(1), Validators.max(10000000)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      image: ['', [Validators.required, Validators.maxLength(200)]],
      category: ['', [Validators.required, Validators.maxLength(40)]],
      activo: [1, [Validators.required]],
      activoOtro: [1, [Validators.required]],
      mostrarPaginaCliente: [false, [Validators.required]],
      // preciosMayor: this.fb.array([], [Validators.required, Validators.min(1)])
      preciosMayor: this.fb.array([])
    });
  }

  precioMayorAsFormArray(): FormArray {
    return (this.form.get('preciosMayor') as FormArray);
  }

  agregarPrecioMayor() {
    this.precioMayorAsFormArray().push(
      this.fb.group({
        cantidadMinima: [0, [Validators.required]],
        nuevoPrecio: [1, [Validators.required, Validators.min(1), Validators.max(10000000)]]
      })
    );
  }

  guardarProducto() {
    if (this.form.invalid) {
      return;
    }
    this.form.disable();
    // ya es valido.
    // setTimeout(() => {
    //   console.log('producto creado!');
    //   this.form.enable();
    //   this.form.reset();
    // }, 3000);
    this.http.post<Producto>(environment.apiStore + 'products', this.form.value).subscribe(response => {
        this.form.enable();
        this.form.reset();
        this.productoCreado.emit(response);
        this.activeModal.dismissAll(response);
    });
    console.log(this.form);
  }

}
