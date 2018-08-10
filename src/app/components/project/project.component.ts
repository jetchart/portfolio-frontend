import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector : 'project',
  templateUrl : './project.component.html'
})
export class ProjectComponent implements OnInit, DoCheck{
  public titulo : string;

  constructor(){
      this.titulo = 'Project Title';
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
