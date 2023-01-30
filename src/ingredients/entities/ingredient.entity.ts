import { Item } from "src/item/entities/item.entity";
import { Merchant } from "src/merchants/entities/merchant.entity";
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
  @Column()
  image: string;
  @ManyToOne(() => Merchant, (merchant: Merchant) => merchant.id)
  merchant: Merchant;
  @ManyToMany(() => Item, (item) => item.ingredients)
  items: Item[];
}
