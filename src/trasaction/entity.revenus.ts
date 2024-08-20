import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('revenus')
export class Revenu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  titre: string;

  

  @Column('decimal', { nullable: false })
  montant: number;

  @CreateDateColumn({ type: 'date' }) 
  date: string; 
}