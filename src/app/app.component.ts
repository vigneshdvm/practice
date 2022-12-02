import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice2';
  activateNavMenu(menuid: any) {
    this.navMenu.forEach((element: any) => {
      if (menuid == element.id) {
        element.classes.active = true;
      } else {
        element.classes.active = false;
      }
    });

  }
  navMenu: any = [
    {
      name: "Home",
      id: 1,
      classes: {
        "nav-link": true,
        "active": false,
      },
      routeto: "home",
    },
    {
      name: "Mobiles",
      id: 2,
      "classes": {
        "nav-link": true,
        "active": false,
      },
      routeto: "mobiles",
    },
    {
      name: "Laptops",
      id: 3,
      classes: {
        "nav-link": true,
        "active": false,
      },
      routeto: "laptops",
    },
    {
      name: "Sneakers",
      id: 4,
      classes: {
        "nav-link": true,
        "active": false,
      },
      routeto: "sneakers",
    },
    {
      name: "Glasses",
      id: 5,
      classes: {
        "nav-link": true,
        "active": false,
      },
      routeto: "glasses",
    },
    {
      name: "fashion",
      id: 6,
      classes: {
        "nav-link": true,
        "active": false,
      },
      routeto: "fashion",
    },
    {
      name: "kitchen",
      id: 7,
      classes: {
        "nav-link": true,
        "active": false,
      },
      routeto: "kitchen",
    },
    {
      name: "furniture",
      id: 8,
      classes: {
        "nav-link": true,
        "active": false,
      },
      routeto: "furniture",
    },
    {
      name: "groceries",
      id: 9,
      classes: {
        "nav-link": true,
        "active": false,
      },
      routeto: "groceries",
    },
    {
      name: "cameras",
      id: 10,
      classes: {
        "nav-link": true,
        "active": false,
      },
      routeto: "cameras",
    },
    {
      name: "appliances",
      id: 11,
      classes: {
        "nav-link": true,
        "active": false,
      },
      routeto: "appliances",
    },
    
  ]
}
