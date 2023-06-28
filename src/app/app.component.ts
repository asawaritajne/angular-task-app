import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent  implements OnInit{
  title = 'task';
  searchFields: any=[];
  searchText: string='';
  ngOnInit(): void {
    this.searchFields=[
      {displayName:'First Name',Symbol:'/',value:''},
      {displyName:'Last Name', Symbol: '@',value: ''},
      {displayName:'Chart no',Symbol:'#',value:''},
      {displayName:'Address',Symbol:'$',value:''}
  
    ];
  }
  updateSearchText(){
    this.searchText =this.searchFields
    .filter((field: { value: string; }) =>field.value!=='')
    .map((field: { Symbol: any; value: any; }) =>field.Symbol + field.value)
    .join('');
  }

  clearSearch(){
    this.searchFields.forEach((field: { value: string; }) =>field.value='');
    this.searchText='';
  }

}


