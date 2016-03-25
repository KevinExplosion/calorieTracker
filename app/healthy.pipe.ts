import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "healthy",
  pure: false
})

export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var calorieCount = args[0];
    if(calorieCount < 300) {
      return input.filter((meal) => {
        return meal.healthy;
      });
    } else if (calorieCount >=300) {
      return input.filter((meal) => {
        return !meal.healthy;
      });
    } else {
      return input;
    }
  }
}
