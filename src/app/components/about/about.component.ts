import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector : 'about',
  templateUrl : './about.component.html'
})
export class AboutComponent implements OnInit, DoCheck{
  public titulo : string;

  constructor(){
      this.titulo = 'About Title';
  }

  //Al iniciar el componente
  ngOnInit(){
    console.log('ngOnInit executed');
  }

  //Al cambiar el componente
  ngDoCheck(){
    console.log('ngDoCheck executed');
  }
}
