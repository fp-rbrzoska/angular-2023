import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, filter, map, of, pairwise, tap } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';

export type ZeroJeden = 'zero' | 'jeden';
export type StringOrNull = string | null;

export interface AppState {
  isUserLoggedIn: boolean;
  userData: User | null;
  products: Product[] | null;
}


@Component({
  selector: 'fp-rx-test',
  templateUrl: './rx-test.component.html',
  styleUrls: ['./rx-test.component.scss']
})
export class RxTestComponent implements OnInit {

  stateSubj = new BehaviorSubject<AppState>({
    isUserLoggedIn: false,
    userData: null,
    products: null
  });

  bsubj = new BehaviorSubject<StringOrNull>('zero');
  subj = new Subject<number>();
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

  // $ na koncu -> finnish notation
  obs$ = of(1,2,3,4);
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
    // this.obs$.pipe(
    //     tap(v => console.log('from tap: ' + v)),
    //     filter(v => v > 2),
    //     map(v => v*2)
    //   ).subscribe(val => console.log(val))

    // this.subj.next(0);
    // this.subj.subscribe(v => console.log(v))

    // this.subj.next(1);    
    // this.subj.complete();    
    // this.subj.next(3);

    this.bsubj.next('jeden');
    this.bsubj.next('jeden i pol');
    this.bsubj.pipe(pairwise()).subscribe(v => console.log(v))

    this.bsubj.next('dwa');    
    this.bsubj.next('trzy');
  }

  logInUser() {
    this.stateSubj.next({
      ...this.stateSubj.value,
      isUserLoggedIn: true,
      userData: { name: 'Alojzy', age: 72 }
    })
  }

}
