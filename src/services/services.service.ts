import { ServiceEntity } from './services.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(ServiceEntity)
    private serviceRepository: Repository<ServiceEntity>,
  ) {}

  findAll(): Promise<ServiceEntity[]> {
    return this.serviceRepository.find()
  }
  findOne(id:number): Promise<ServiceEntity> {
    return this.serviceRepository.findOneBy({id})
  }
  async remove(id: number): Promise<void> {
    await this.serviceRepository.delete(id);
  }
}
