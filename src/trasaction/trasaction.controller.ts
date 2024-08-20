import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';


import { Depense } from './entity.depence';
import { TransactionService } from './trasaction.service';
import { Revenu } from './entity.revenus';



@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  // Endpoint pour ajouter un revenu
  @Post('revenus')
  createRevenu(@Body() revenu: Partial<Revenu>) {
    return this.transactionService.createRevenu(revenu);
  }

  // Endpoint pour obtenir tous les revenus
  @Get('revenus')
  findAllRevenus() {
    return this.transactionService.getRevenus();
  }

  // Endpoint pour mettre à jour un revenu
  @Patch('revenus/:id')
  updateRevenu(@Param('id') id: number, @Body() revenu: Partial<Revenu>) {
    return this.transactionService.updateRevenu(id, revenu);
  }

  // Endpoint pour supprimer un revenu
  @Delete('revenus/:id')
  removeRevenu(@Param('id') id: number) {
    return this.transactionService.deleteRevenu(id);
  }

  // Endpoint pour ajouter une dépense
  @Post('depenses')
  createDepense(@Body() depense: Partial<Depense>) {
    return this.transactionService.createDepense(depense);
  }

  // Endpoint pour obtenir toutes les dépenses
  @Get('depenses')
  findAllDepenses() {
    return this.transactionService.getDepenses();
  }

  // Endpoint pour mettre à jour une dépense
  @Patch('depenses/:id')
  updateDepense(@Param('id') id: number, @Body() depense: Partial<Depense>) {
    return this.transactionService.updateDepense(id, depense);
  }

  // Endpoint pour supprimer une dépense
  @Delete('depenses/:id')
  removeDepense(@Param('id') id: number) {
    return this.transactionService.deleteDepense(id);
  }

  // Endpoint pour obtenir un résumé des revenus et des dépenses
  @Get('summary')
  getSummary() {
    return this.transactionService.getSummary();
  }
}
