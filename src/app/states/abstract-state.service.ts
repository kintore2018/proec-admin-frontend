import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractStateService<T> {

  abstract subject: Subject<T>;
  abstract defaultState: T;

  get $(): Observable<T> {
    return this.subject.asObservable();
  }

  protected setValue(value: T): void {
    this.subject.next(value);
  }

  protected reset(): void {
    this.setValue(this.defaultState);
  }
}
