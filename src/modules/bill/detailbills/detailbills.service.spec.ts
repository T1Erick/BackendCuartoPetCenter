import { Test, TestingModule } from '@nestjs/testing';
import { DetailbillsService } from './detailbills.service';

describe('DetailbillsService', () => {
  let service: DetailbillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailbillsService],
    }).compile();

    service = module.get<DetailbillsService>(DetailbillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
