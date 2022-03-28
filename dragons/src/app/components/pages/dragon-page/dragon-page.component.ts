import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DragonModel } from 'src/app/models/dragon.model';
import { DragonService } from 'src/app/services/dragon.service';

@Component({
  selector: 'app-dragon-page',
  templateUrl: './dragon-page.component.html',
  styleUrls: ['./dragon-page.component.css']
})
export class DragonPageComponent implements OnInit {

  dragons : any;
  erro: any

  constructor(private dragonService: DragonService, private route: Router) { }

  ngOnInit(): void {
    this.getter();
  }

  getter(){
    this.dragonService.getDragons().subscribe((res) => {
      this.dragons = res;
      console.log(this.dragons)
      this.dragons.sort((a: any,b: any) => this.sortStrings(a,b));
      console.log(this.dragons)
    }
  )
  }


  sortStrings(a: any, b: any){
    let firstName = a.name.toLowerCase();
    let secondName = b.name.toLowerCase();
     if(firstName < secondName){
       return -1;
     } else if (firstName > secondName){
        return 1
     } 
     return 0
  }

  goCadastro(){
    this.route.navigate([`/dragon-form`]);
  }

  goPerfil(){
      this.route.navigate([`/dragon-profile`]);
  }
}
