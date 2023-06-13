import { Test, TestingModule } from '@nestjs/testing';
import { DetailpublicationController } from './detailpublication.controller';

describe('DetailpublicationController', () => {
  let controller: DetailpublicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailpublicationController],
    }).compile();

    controller = module.get<DetailpublicationController>(DetailpublicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
