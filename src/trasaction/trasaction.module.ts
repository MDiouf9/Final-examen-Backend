import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { Depense } from './entity.depence';
import { Revenu } from './entity.revenus';
import { TransactionService } from './trasaction.service';
import { TransactionController } from './trasaction.controller';



@Module({
  imports: [TypeOrmModule.forFeature([Revenu, Depense])],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionsModule{}
