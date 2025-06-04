import { Module } from '@nestjs/common';
import { UserModule } from './controllers/user.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [UserModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
