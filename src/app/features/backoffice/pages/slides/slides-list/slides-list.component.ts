import { Component, OnInit } from '@angular/core';
import { Slide, Slides } from '@app/core/models/slide.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slides-list',
  templateUrl: './slides-list.component.html',
  styleUrls: ['./slides-list.component.scss']
})
export class SlidesListComponent implements OnInit {

  cols = [
    { field: 'order', header: 'Orden' },
    { field: 'name', header: 'Nombre' },
    { field: 'image', header: 'Imagen' },
];

  slides: any[] = [
    {
      "id": 958,
      "name": "Clases de arte",
      "description": "Se invito a los niños a jugar y expresarse a través de las pinturas",
      "image": "http://ongapi.alkemy.org/storage/GJrhlhckaO.jpeg",
      "order": 2,
      "user_id": null,
      "created_at": "2022-02-17T18:10:44.000000Z",
      "updated_at": "2022-02-24T04:11:37.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 960,
      "name": "Dia de campo",
      "description": "Fuimos a recorrer los campos de girasol y aprender sobre su cultivo",
      "image": "http://ongapi.alkemy.org/storage/dXgLO3GLPh.jpeg",
      "order": 3,
      "user_id": null,
      "created_at": "2022-02-17T18:46:12.000000Z",
      "updated_at": "2022-02-24T04:10:19.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 961,
      "name": "Prueba 1",
      "description": "motivo: prueba",
      "image": "http://ongapi.alkemy.org/storage/UKEBUKbh9p.jpeg",
      "order": 100,
      "user_id": null,
      "created_at": "2022-02-22T20:34:55.000000Z",
      "updated_at": "2022-02-24T04:09:29.000000Z",
      "deleted_at": null,
      "group_id": 36
    },
    {
      "id": 962,
      "name": "Test 1",
      "description": "Motivo: test",
      "image": "http://ongapi.alkemy.org/storage/WGxFcCBJkL.jpeg",
      "order": 200,
      "user_id": null,
      "created_at": "2022-02-22T20:35:26.000000Z",
      "updated_at": "2022-02-24T14:29:04.000000Z",
      "deleted_at": null,
      "group_id": 36
    },
    {
      "id": 963,
      "name": "asd4",
      "description": "<p>desc</p>",
      "image": "http://ongapi.alkemy.org/storage/EKppFj4kBf.jpeg",
      "order": 14,
      "user_id": null,
      "created_at": "2022-02-24T14:44:10.000000Z",
      "updated_at": "2022-02-24T14:44:10.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 964,
      "name": "qwee",
      "description": "<p>cambiando descripcion</p>",
      "image": "http://ongapi.alkemy.org/storage/wrGFw6yGn7.jpeg",
      "order": 144,
      "user_id": null,
      "created_at": "2022-02-24T14:46:49.000000Z",
      "updated_at": "2022-02-24T15:15:37.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 965,
      "name": "fdgfgfd",
      "description": "<p>asdawer</p>",
      "image": "http://ongapi.alkemy.org/storage/ItdxkvnfhQ.jpeg",
      "order": 11,
      "user_id": null,
      "created_at": "2022-02-24T14:49:10.000000Z",
      "updated_at": "2022-02-24T14:49:10.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 966,
      "name": "prueba",
      "description": "<p>descpricion prueba</p>",
      "image": "http://ongapi.alkemy.org/storage/ZNbqYqdlDO.jpeg",
      "order": 144,
      "user_id": null,
      "created_at": "2022-02-24T16:57:07.000000Z",
      "updated_at": "2022-02-24T16:57:36.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 967,
      "name": "Nombre prueba",
      "description": "<p>Descripcion de prueba</p>",
      "image": "http://ongapi.alkemy.org/storage/d0VTzRcYnc.jpeg",
      "order": 154,
      "user_id": null,
      "created_at": "2022-02-24T17:06:00.000000Z",
      "updated_at": "2022-02-24T21:34:36.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 968,
      "name": "nombre de prueba 3",
      "description": "<p>descripcion editada</p>",
      "image": "http://ongapi.alkemy.org/storage/OUB3MRXnPi.jpeg",
      "order": 12,
      "user_id": null,
      "created_at": "2022-02-24T17:08:31.000000Z",
      "updated_at": "2022-02-24T17:09:10.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 969,
      "name": "nombre de prueba editado",
      "description": "<p>descripcion editada</p>",
      "image": "http://ongapi.alkemy.org/storage/sLfx0T1Lpk.jpeg",
      "order": 4,
      "user_id": null,
      "created_at": "2022-02-24T17:10:31.000000Z",
      "updated_at": "2022-02-24T17:11:09.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 970,
      "name": "Taller de arte",
      "description": "<p>contamos con talleres de arte todos los fines de semana, apto para todas las edades!</p>",
      "image": "http://ongapi.alkemy.org/storage/1ubINtmdDG.jpeg",
      "order": 1,
      "user_id": null,
      "created_at": "2022-02-24T17:55:16.000000Z",
      "updated_at": "2022-02-24T19:59:19.000000Z",
      "deleted_at": null,
      "group_id": 39
    },
    {
      "id": 971,
      "name": "Equipo somos más!",
      "description": "<p>Somos más es una gran familia, siempre con los brazos abiertos para sumar más gente dispuesta a ayudar!</p>",
      "image": "http://ongapi.alkemy.org/storage/lLEaSYsyux.jpeg",
      "order": 2,
      "user_id": null,
      "created_at": "2022-02-24T17:58:56.000000Z",
      "updated_at": "2022-02-24T19:59:10.000000Z",
      "deleted_at": null,
      "group_id": 39
    },
    {
      "id": 972,
      "name": "Clases particulares",
      "description": "<p>Siempre tenemos abierto espacios donde nos ayudamos entre todos en nuestros estudios escolares</p>",
      "image": "http://ongapi.alkemy.org/storage/sbbsbQnxj9.jpeg",
      "order": 3,
      "user_id": null,
      "created_at": "2022-02-24T20:30:10.000000Z",
      "updated_at": "2022-02-24T20:30:10.000000Z",
      "deleted_at": null,
      "group_id": 39
    }
  ];

  constructor() { }

  ngOnInit(): void {

    
  }

}
