import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DragonService } from 'src/app/services/dragon.service';

@Component({
  selector: 'app-dragon-profile',
  templateUrl: './dragon-profile.component.html',
  styleUrls: ['./dragon-profile.component.css']
})
export class DragonProfileComponent implements OnInit {

  id: any;
  dragon: any;

  constructor(private dragonService: DragonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dragonService.getDragon(this.id).subscribe(res => {
      this.dragon = res
    });
  }

}
