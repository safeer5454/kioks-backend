import { Item } from "src/item/entities/item.entity";
import { Kiosk } from "src/kiosk/entities/kiosk.entity";
import { Merchant } from "src/merchants/entities/merchant.entity";
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity()
export class Extra {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  image: string;
  @ManyToOne(() => Merchant, (merchant: Merchant) => merchant.id)
  merchant: Merchant;
  @ManyToMany(() => Item, (item) => item.extras)
  items: Item[];
}
