import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero_AQ = "hammrhero";
  hero_AW : Hero = {
    id: 1,
    name: "hammr",
    value: "blue bag"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
