import { Item } from "src/item/entities/item.entity";
import { Kiosk } from "src/kiosk/entities/kiosk.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity()
export class Deal {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  image: string;
  @Column()
  name: string;
  @Column()
  price: number;
  @ManyToMany(() => Item, (item) => item.deal)
  @JoinTable()
  items: Item[];
  @ManyToOne(() => Kiosk, (kiosk: Kiosk) => kiosk.id, { onDelete: "CASCADE" })
  kiosk: Kiosk;
}
