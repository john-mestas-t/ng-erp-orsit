import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { Observable, from, map } from 'rxjs';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class PocketbaseService {
  private pb: PocketBase;

  constructor() {
    this.pb = new PocketBase('https://orsit.pockethost.io/'); // Update with your PocketBase URL
  }

  getMenuItems(): Observable<MenuItem[]> {
    return from(this.pb.collection('icons').getList(1, 50)).pipe(
      map(response => response.items.map(item => this.serializeMenuItem(item)))
    );
  }

  private serializeMenuItem(item: any): MenuItem {
    return {
      name: item.name,
      icon: item.icon,
      color: item.color,
      link: item.link
    };
  }
}