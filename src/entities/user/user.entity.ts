import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  name: string;

  @Column({ length: 80 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 100 })
  telephone: string;
}
