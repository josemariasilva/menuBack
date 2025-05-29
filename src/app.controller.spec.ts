import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Maracuja de limão"', () => {
      expect(appController.getHello()).toBe('Maracuja de limão');
    });

    it('shoudl return sum of parameter', ()=>{
      expect(appController.postSum({one:1, two:1})).toBe(2);
    });

    it('shoudl return difference of parameter', ()=>{
      expect(appController.postDiff({one:1, two:1})).toBe(0);
    });

    it('shoudl return sum of all parameters', ()=>{
      expect(appController.postMultSum({arr:[1,2,3,4]})).toBe("10");
    });

  });
});
