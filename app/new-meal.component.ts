import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  templateUrl: 'app/new-meal.component.html'
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<any>;
    constructor(){
      this.onSubmitNewMeal = new EventEmitter();
    }

    addMeal(userName: HTMLInputElement, userDescription: HTMLInputElement,
    userCalories: HTMLInputElement){
      var mealArray: Array<any> = [userName.value, userDescription.value, userCalories.value];

        this.onSubmitNewMeal.emit(mealArray);

        userName.value="";
        userDescription.value="";
        userCalories.value="";
  }
}
