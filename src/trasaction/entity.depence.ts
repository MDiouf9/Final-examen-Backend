import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('depenses')
export class Depense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  titre: string;


  @Column('decimal', { nullable: false })
  montant: number;

  @CreateDateColumn({ type: 'date' })
  date: string; 
}