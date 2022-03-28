import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonModel } from 'src/app/models/dragon.model';
import { DragonService } from 'src/app/services/dragon.service';

@Component({
  selector: 'app-dragon-delete',
  templateUrl: './dragon-delete.component.html',
  styleUrls: ['./dragon-delete.component.css']
})
export class DragonDeleteComponent implements OnInit {

  id: any;
  dragon: DragonModel;

  constructor(private dragonService: DragonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dragonService.getDragon(this.id).subscribe(res => {
     this.dragon = res;
    });
  }

  delete(){
    this.dragonService.deleteDragon(this.id).subscribe(res => {
      alert('Removido com sucesso!')
      this.router.navigate([`/dragon-page`]);
    });
  }

}
