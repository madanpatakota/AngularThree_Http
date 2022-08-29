import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularThree_Http';

  constructor(private httpClient: HttpClient) {}

  ProductsData: any = [];
  ngOnInit(): void {
    // this.httpClient.get("https://jsonplaceholder.typicode.com/todos/")
    // .subscribe((result)=>{
    //   console.log("Result from Jsonplaceholder api" ,result);
    //   this.mydata = result;
    // })
    this.httpClient
      .get('http://localhost:3000/Products')
      .subscribe((result) => {
        console.log(result);
        this.ProductsData = result;
      });
  }

  PostProduct() {
    this.httpClient
      .post('http://localhost:3000/Products', {
        id: 7,
        Name: 'Lenovo_First_version',
        Price: '10000',
        Location: 'Bangolore',
      })
      .subscribe((result) => {
        //console.log(result);
        this.ProductsData.push(result);
      });
  }


  // {
  //   "id": 3,
  //   "Name": "HP",
  //   "Price": "20000",
  //   "Location": "Chennai"
  // },

  UpdateProduct() {
    this.httpClient
      .put('http://localhost:3000/Products/1', {
          "Name": "xyz",
          "Price": "10000",
          "Location": "Delhi"
      })
      .subscribe((result:any) => {
        console.log(result);
        this.ProductsData.push(result);
        // let data = this.ProductsData as [];
        // let record = data.filter((x:any,index)=> x.id == result.id)[0];
      });
  }


  PatchProduct() {
    this.httpClient
      .patch('http://localhost:3000/Products/1', {
          "Name": "AcerTwo",
      })
      .subscribe((result:any) => {
        console.log(result);
        //this.ProductsData.push(result);
        // let data = this.ProductsData as [];
        // let record = data.filter((x:any,index)=> x.id == result.id)[0];
      });
  }



  DeleteProduct() {
    this.httpClient
      .delete('http://localhost:3000/Products/2')
      .subscribe((result:any) => {
        console.log(result);
        //this.ProductsData.push(result);
        // let data = this.ProductsData as [];
        // let record = data.filter((x:any,index)=> x.id == result.id)[0];
      });
  }





  //for doing the subscription i need the some setup
}
