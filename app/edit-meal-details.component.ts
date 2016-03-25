import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  templateUrl: 'app/edit-meal-details.component.html'
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
