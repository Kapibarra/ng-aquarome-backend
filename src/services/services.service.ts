import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicesService {

    private services = [
        {
            name: 'title',
            description: 'description',
            price: '1000RUB'
        },
        {
            name: 'title 2',
            description: 'description 2',
            price: '1000RUB'
        },
        {
            name: 'title 3',
            description: 'description 3',
            price: '1000RUB'
        },
        {
            name: 'title 4',
            description: 'description 4',
            price: '1000RUB'
        },
    ]

    getServices() {
        return this.services;
    }
}
