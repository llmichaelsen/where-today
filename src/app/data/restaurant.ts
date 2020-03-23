
const typeLabels = ['Comida de Boteco',
    'Churrasco',
    'Brasileira',
    'Francesa',
    'Hambúrguer',
    'Italiana',
    'Japonesa',
    'Mexicana',
    'Pizza',
    'Portuguesa',
    'Frutos do mar',
    'Sushi',
    'Nordestino',
    'Minas Gerais',
    'Vegetariana'
];


export class Restaurant {

    id: number;
    name: string;
    type: number;
    address: string;
    pricing: number;
    pricingLabel: string;
    image: number;
    typeLabel: string;

    constructor(id, name, type, address, pricing, image) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.address = address;
        this.pricing = pricing;
        this.image = image;
        this.typeLabel = this.getTypeName();
        this.pricingLabel = this.getPricingLabel();
    }

    getTypeName() {
        return typeLabels[this.type];
    }

    getPricingLabel() {
        return '$'.repeat(this.pricing);
    }


}
