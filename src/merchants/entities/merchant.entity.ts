import { Branch } from "src/branch/entities/branch.entity";
import { Extra } from "src/extras/entities/extra.entity";
import { Ingredient } from "src/ingredients/entities/ingredient.entity";
import { Membership } from "src/membership/entities/membership.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity()
export class Merchant {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  cafeName: string;
  @Column()
  ownerName: string;
  @Column()
  email: string;
  @Column()
  phoneNumber: number;
  @Column()
  city: string;
  @Column()
  address: string;
  @Column()
  vatNumber: number;
  @Column()
  zipCode: number;
  // @OneToMany()
  // role:Role
  @Column()
  userName: string;
  @Column()
  password: string;
  @ManyToOne(() => Membership, (membership: Membership) => membership.id)
  membership: Membership;
  @OneToMany(() => Branch, (branch: Branch) => branch.merchant)
  branch: Branch;
  @OneToMany(() => Extra, (extra: Extra) => extra.merchant)
  extras: Extra;
  @OneToMany(() => Ingredient, (ingredient: Ingredient) => ingredient.merchant)
  ingredient: Ingredient;
  @Column()
  startDate: Date;
  @Column()
  endDate: Date;
}
