import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Depense } from './entity.depence';
import { Revenu } from './entity.revenus';


@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Revenu)
    private readonly revenusRepository: Repository<Revenu>,
    
    @InjectRepository(Depense)
    private readonly depensesRepository: Repository<Depense>,
  ) {}

  async createRevenu(revenu: Partial<Revenu>) {
    const newRevenu = this.revenusRepository.create(revenu);
    return this.revenusRepository.save(newRevenu);
  }

  async getRevenus() {
    return this.revenusRepository.find();
  }

  async updateRevenu(id: number, revenu: Partial<Revenu>) {
    await this.revenusRepository.update(id, revenu);
    return this.revenusRepository.findOne({ where: { id } });
  }

  async deleteRevenu(id: number) {
    return this.revenusRepository.delete(id);
  }

  async createDepense(depense: Partial<Depense>) {
    const newDepense = this.depensesRepository.create(depense);
    return this.depensesRepository.save(newDepense);
  }

  async getDepenses() {
    return this.depensesRepository.find();
  }

  async updateDepense(id: number, depense: Partial<Depense>) {
    await this.depensesRepository.update(id, depense);
    return this.depensesRepository.findOne({ where: { id } });
  }

  async deleteDepense(id: number) {
    return this.depensesRepository.delete(id);
  }

  async getSummary() {
    const revenus = await this.getRevenus();
    const depenses = await this.getDepenses();
    const totalRevenus = revenus.reduce((acc, r) => acc + r.montant, 0);
    const totalDepenses = depenses.reduce((acc, d) => acc + d.montant, 0);
    const solde = totalRevenus - totalDepenses;

    return {
      revenus: totalRevenus,
      depenses: totalDepenses,
      solde
    };
  }
}
