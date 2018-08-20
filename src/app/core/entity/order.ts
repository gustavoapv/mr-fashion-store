import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export class Order {

    constructor(
        public name: string,
        public idCardType: string,
        public idCard: string,
        public productQuantity: string,
        public deliveryDate:NgbDateStruct,
        public deliveryHour:string,
        public address: string,
        public total:string
        
        ) 
        
        {
        this.name = name
        this.idCardType = idCardType;
        this.idCard = idCard;
        this.productQuantity = productQuantity;
        this.deliveryDate = deliveryDate;
        this.deliveryHour =deliveryHour;
        this.address =address;
        this.total = total;
    }
}