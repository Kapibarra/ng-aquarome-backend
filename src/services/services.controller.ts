import { ServicesService } from './services.service';
import { Controller, Get } from '@nestjs/common';

@Controller('services')
export class ServicesController {

constructor(private ServicesService: ServicesService) {

}

@Get('hui1')
    getServices() {
        return this.ServicesService.getServices()
    };
    
@Get('hui2')
    getServices2() {
        return this.ServicesService.getServices()
    }
}

