import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from './trasaction/trasaction.module';
import { Revenu } from './trasaction/entity.revenus';
import { Depense } from './trasaction/entity.depence';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'budgets.db',
      entities: [Revenu, Depense],
      synchronize: true,
    }),
    TransactionsModule,
  ],
})
export class AppModule {}