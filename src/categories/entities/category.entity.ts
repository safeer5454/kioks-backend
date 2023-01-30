import { CATEGORY_TYPE, ITEM_TYPE, SIZE_TYPE } from "src/common/enums";
import { Item } from "src/item/entities/item.entity";
import { Kiosk } from "src/kiosk/entities/kiosk.entity";
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
  @Column()
  image: string;
  //branch kiosk
  @ManyToMany(() => Kiosk, (kiosk) => kiosk.categories)
  kiosk: Kiosk[];
  @OneToMany(() => Item, (item) => item.category)
  items: Item[];
}
