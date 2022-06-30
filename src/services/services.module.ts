import { ServiceEntity } from './services.entity';
import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesService } from './services.service';

@Module({
  controllers: [ServicesController],
  providers: [ServicesService],
  imports: [TypeOrmModule.forFeature([ServiceEntity])],
})
export class ServicesModule {

  
}
