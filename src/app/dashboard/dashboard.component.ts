import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../models/menu-item.model';
import { PocketbaseService } from '../services/pocketbase.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private pocketbaseService: PocketbaseService) {}

  ngOnInit() {
    this.loadMenuItems();
  }

  private loadMenuItems() {
    this.pocketbaseService.getMenuItems().subscribe({
      next: (items) => {
        this.menuItems = items;
      },
      error: (error) => {
        console.error('Error loading menu items:', error);
        // Fallback to default items if API fails
        this.loadDefaultItems();
      }
    });
  }

  private loadDefaultItems() {
    this.menuItems = [
      { name: 'Tools', icon: 'build', color: '#ffd54f', link: '/tools' },
      { name: 'Item', icon: 'inventory_2', color: '#ff9800', link: '/items' },
      { name: 'Customer', icon: 'person', color: '#26a69a', link: '/customers' },
      { name: 'File Manager', icon: 'folder', color: '#8d6e63', link: '/files' },
      { name: 'Supplier', icon: 'business', color: '#d32f2f', link: '/suppliers' },
      { name: 'Website', icon: 'language', color: '#00897b', link: '/website' },
      { name: 'Employee', icon: 'groups', color: '#2ecc71', link: '/employees' },
      { name: 'Project', icon: 'rocket_launch', color: '#9c27b0', link: '/projects' },
      { name: 'Issue', icon: 'error', color: '#37474f', link: '/issues' },
      { name: 'Lead', icon: 'trending_up', color: '#03a9f4', link: '/leads' },
      { name: 'Accounts', icon: 'account_balance', color: '#3f51b5', link: '/accounts' },
      { name: 'Stock', icon: 'inventory', color: '#f39c12', link: '/stock' },
      { name: 'CRM', icon: 'people', color: '#e91e63', link: '/crm' },
      { name: 'Manufacturing', icon: 'precision_manufacturing', color: '#78909c', link: '/manufacturing' },
      { name: 'POS', icon: 'point_of_sale', color: '#009688', link: '/pos' }
    ];
  }
}