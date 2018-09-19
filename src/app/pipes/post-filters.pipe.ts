import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postFilters'
})
export class PostFiltersPipe implements PipeTransform {

  transform(posts: any, criteria?: any): any {
    if (criteria === undefined) return posts;

    return posts.filter(function(post){
      return post.title.toLowerCase().includes(criteria.toLowerCase());
    })
  }

}
