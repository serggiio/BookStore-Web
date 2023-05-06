import { Injectable } from '@angular/core';
import { Alert } from '../models/Alert';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alerts: Alert[] = [];

  add(alert: Alert) {
    this.alerts.push(alert);
  }

  remove(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  removeAlerts() {
    this.alerts = [];
  }
}
