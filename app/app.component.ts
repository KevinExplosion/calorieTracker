///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
    selector: 'my-app',
    directives: [MealListComponent],
  templateUrl: 'app/app.component.html'
})

export class AppComponent {

  public meals: Meal[];

  constructor(){
    this.meals = [];
  }

  mealWasSelected(clickedMeal: Meal): void {

  }
}
