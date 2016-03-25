import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { HealthyPipe } from './healthy.pipe';

@Component({
    selector: 'meal-list',
    inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthyPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <br>
    <meal-display *ngFor="#currentMeal of mealList | healthy:filterHealthy"
     (click)="mealClicked(currentMeal)"
     [class.selected]="currentMeal === selectedMeal"
     [meal] = "currentMeal">
    </meal-display>
    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
    </edit-meal-details>
    <hr>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>

    <div class="form-group">
      <select class="form-control" (change)="onChange($event.target.value)">
        <option value="all">Show All</option>
        <option value="healthy">Show Meals < 300 Calories</option>
        <option value="notHealthy" selected="selected">Show Meals > 300 Calories</option>
      </select>
    </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "healthy";

  constructor() {
    this.onMealSelect = new EventEmitter();
  }

  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }

  createMeal(mealArray: Array<any>): void {
    this.mealList.push(
      new Meal(mealArray[0], mealArray[1], mealArray[2])
    );
  }

  onChange(filterOption) {
    this.filterHealthy = filterOption;
    console.log(this.filterHealthy);
  }
}
