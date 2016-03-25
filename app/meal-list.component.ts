import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
// import { EditMealDetailsComponent } from './edit-meal-details.component';
// import { NewMealComponent } from './new-meal.component';
// the above imports are making atom mad because they haven't been created yet

@Component({
    selector: 'meal-list',
    inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  templateUrl: 'meal-list.component.html'
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;

  constructor() {
    this.onMealSelect = new EventEmitter();
  }

  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }

  createMeal(mealArray: Array<any>): void {
    this.mealList.push(
      new Meal(mealArray[0], mealArray[1], mealArray[2]);
    )
  }
}
