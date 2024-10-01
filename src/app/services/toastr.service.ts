import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface ToastInfo {
  body: string;
  className?: string;
  delay?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastrService {
  readonly toasts$ = new BehaviorSubject<ToastInfo[]>([]);

  show(body: string, options: Partial<ToastInfo> = {}): void {
    this.toasts$.next([...this.toasts$.value, { body, ...options }]);
  }

  remove(toast: ToastInfo): void {
    this.toasts$.next(this.toasts$.value.filter(t => t !== toast));
  }
}
