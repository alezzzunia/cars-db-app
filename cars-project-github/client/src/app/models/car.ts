export class Car {
    _id!: string;
    name: string;
    model: string;
    price: number;
    image: string

    constructor(name: string, model: string, price: number, image: string) {
        // this.id = id
        this.name = name
        this.model = model
        this.price = price
        this.image = image
    }
}