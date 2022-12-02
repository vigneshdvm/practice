import { Component, OnInit } from '@angular/core';
import { FashionService } from 'src/app/fashion/fashion.service';


@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

  constructor(private data: FashionService) { }

  ngOnInit(): void { 
    this.fashionList = this.data.fashionList
  }
fashionList: any =[];
}
