
export class Product {

    constructor(
        public id: string,
        public desc: string,
        public img: string,
        public price: string,
        public category:string) {
        this.id = id
        this.desc = desc;
        this.img = img;
        this.price = price;
        this.category = category;
    }
}