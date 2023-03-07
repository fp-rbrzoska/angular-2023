import { Component, OnInit } from '@angular/core';
import { Observable, filter, map, of, tap } from 'rxjs';

@Component({
  selector: 'fp-rx-test',
  templateUrl: './rx-test.component.html',
  styleUrls: ['./rx-test.component.scss']
})
export class RxTestComponent implements OnInit {

  // obs =  new Observable((observer)=> {
  //   setTimeout(() => {
  //     observer.next('o1')
  //   }, 1500)
  //   setTimeout(() => {
  //     observer.error('error!')
  //   }, 2000)
  //   setTimeout(() => {
  //     observer.next('o2')
  //   }, 3000)
  // });

  obs  = of(1,2,3,4);
  // promiseObj = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject('error!')
  //   }, 1500)
  //   setTimeout(() => {
  //     resolve('done!')
  //   }, 2000)
  // })

  ngOnInit(): void {
    // this.promiseObj.then( val => console.log(val)).catch(err => console.error(err))
    this.obs.pipe(
        tap(v => console.log('from tap: ' + v)),
        filter(v => v > 2),
        map(v => v*2)
      ).subscribe(val => console.log(val))
  }

}
