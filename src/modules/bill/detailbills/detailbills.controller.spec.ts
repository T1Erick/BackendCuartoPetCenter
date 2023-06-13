import { Test, TestingModule } from '@nestjs/testing';
import { DetailbillsController } from './detailbills.controller';

describe('DetailbillsController', () => {
  let controller: DetailbillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailbillsController],
    }).compile();

    controller = module.get<DetailbillsController>(DetailbillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
