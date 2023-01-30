import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  userName: string;
  @Column()
  email: string;
  @Column()
  phoneNumber: number;
  @Column()
  password: string;
}
