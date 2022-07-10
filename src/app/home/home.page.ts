import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  items: any[] = [];

  constructor() {}

  ngOnInit() {
    this.addInput();
  }

  addInput() {
    this.items.push({ name: '', flag: 1 });
    console.log(this.items);
  }

  changeInInput(event, index) {
    // console.log(event, index);
    const value = event.detail.value;
    if(value?.length > 0) {
      if(!this.items[index + 1]) this.addInput();
      if(this.items[index].flag == 0) this.toggleFlag(index, 1);
    } else this.toggleFlag(index, 0);
  }

  toggleFlag(index, val) {
    this.items[index].flag = val;
  }

  checkEmptyInput() {
    console.log(this.items);
    if(this.items?.length > 1) {
      this.items = this.items.filter(
        element => (
          element.name.trim().length > 0 
          || 
          (element.name.trim().length == 0 && element.flag == 1)
        )
      );
    }
  }

}
