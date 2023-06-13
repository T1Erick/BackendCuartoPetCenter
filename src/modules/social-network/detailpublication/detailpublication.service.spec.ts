import { Test, TestingModule } from '@nestjs/testing';
import { DetailpublicationService } from './detailpublication.service';

describe('DetailpublicationService', () => {
  let service: DetailpublicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailpublicationService],
    }).compile();

    service = module.get<DetailpublicationService>(DetailpublicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
