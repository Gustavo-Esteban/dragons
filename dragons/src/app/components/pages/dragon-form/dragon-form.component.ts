import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestCreate, ResponseCreate } from 'src/app/models/dragon.model';
import { DragonService } from 'src/app/services/dragon.service';

@Component({
  selector: 'app-dragon-form',
  templateUrl: './dragon-form.component.html',
  styleUrls: ['./dragon-form.component.css'],
})
export class DragonFormComponent implements OnInit {
  request: RequestCreate = {
    name: '',
    type: '',
  };

  response: ResponseCreate;

  constructor(private route: Router, private dragonService: DragonService) {}

  ngOnInit(): void {}

  goDragon() {
    this.route.navigate(['/dragon-page']);
  }

  save() {
    let nome = (<HTMLSelectElement>document.getElementById('nome')).value;
    let tipo =  (<HTMLSelectElement>document.getElementById('type')).value;
    if (nome == '' || tipo == '') {
      alert('Preencha todos os campos!');
    } else {
      this.dragonService.createDragon(this.request).subscribe((res) => {
        this.response = res;
        this.route.navigate([`/dragon-page`]);
      });
    }
  }
}
