import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestUpdate } from 'src/app/models/dragon.model';
import { DragonService } from 'src/app/services/dragon.service';

@Component({
  selector: 'app-dragon-update',
  templateUrl: './dragon-update.component.html',
  styleUrls: ['./dragon-update.component.css']
})
export class DragonUpdateComponent implements OnInit {

  id: any;
  request: RequestUpdate;

  constructor(private dragonService: DragonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dragonService.getDragon(this.id).subscribe(res => {
      this.request = {
        name: res.name,
        type: res.type
      }
    });
  }

  atualizar(){
    this.dragonService.updateDragon(this.id, this.request).subscribe(res => {
      alert(`Atualizado nome:${res.name} tipo: ${res.type} com sucesso`)
      this.router.navigate([`/dragon-page`]);
    })
  }

}
