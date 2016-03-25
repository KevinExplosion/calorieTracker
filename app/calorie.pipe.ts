import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calorie",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredState = args[0];
    if(desiredState === "low") {
      return input.filter((meal) => {
        return meal.calories < 300;
      });
    } if (desiredState === "high") {
      return input.filter((meal) => {
        return meal.calories >= 300;
      });
    } else {
      return input;
    }
  }
}
