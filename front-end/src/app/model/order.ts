export class Order {

  id: number;
  name: string;
  dataCreate: Date;
  data_update: Date;
  description: string;
  categoryName: string;
  img: string;
  price: number;
  numberOfPages: number;
  author: string;


  constructor(id: number, name: string, dataCreate: Date, data_update: Date, description: string,categoryName: string, img: string, price: number,numberOfPages: number,author: string) {
    this.id = id;
    this.name = name;
    this.dataCreate = dataCreate;
    this.data_update = data_update;
    this.description = description;
    this.categoryName = categoryName;
    this.img = img;
    this.price = price;
    this.numberOfPages = numberOfPages;
    this.author = author;
  }
}
