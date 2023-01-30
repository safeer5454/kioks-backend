import { SIDE_TYPE } from "src/common/enums";
import { Item } from "src/item/entities/item.entity";
import { Kiosk } from "src/kiosk/entities/kiosk.entity";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity()
export class Side {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "enum", enum: SIDE_TYPE, nullable: false })
  type: SIDE_TYPE;
  @ManyToMany(() => Item, (item) => item.sides)
  @JoinTable()
  items: Item[];
  @ManyToOne(() => Kiosk, (kiosk: Kiosk) => kiosk.id)
  @JoinColumn()
  kiosk: Kiosk;
}
