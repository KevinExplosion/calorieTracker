import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  templateUrl: 'app/meal.component.html'
})

export class MealComponent {
  public meal: Meal;
}
