import {Entity, model, property} from '@loopback/repository';

@model()
export class Car extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  make: string;

  @property({
    type: 'string',
    required: true,
  })
  model: string;

  @property({
    type: 'number',
    required: true,
  })
  year: number;

  @property({
    type: 'number',
  })
  horsepower?: number;

  @property({
    type: 'number',
  })
  torque?: number;


  constructor(data?: Partial<Car>) {
    super(data);
  }
}
