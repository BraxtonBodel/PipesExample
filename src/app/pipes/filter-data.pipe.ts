import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(users: any, criteria: any): any {
    if (criteria === undefined) return users;

    return users.filter(function(user){
      return user.name.toLowerCase().includes(criteria.toLowerCase());
    })
  }
}
