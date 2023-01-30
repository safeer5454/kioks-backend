import { Branch } from "src/branch/entities/branch.entity";
import { Category } from "src/categories/entities/category.entity";
import { CATEGORY_TYPE, ITEM_TYPE, SIZE_TYPE } from "src/common/enums";
import { Deal } from "src/deals/entities/deal.entity";
import { Side } from "src/sides/entities/side.entity";
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
export class Kiosk {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  deviceName: string;
  @Column()
  location: string;
  @Column()
  kioskId: number;
  @Column()
  password: string;
  //branch relation
  @ManyToOne(() => Branch, (branch) => branch.id, { onDelete: "CASCADE" })
  branch: Branch;
  @OneToMany(() => Side, (side) => side.kiosk, { onDelete: "CASCADE" })
  side: Side;
  @OneToMany(() => Deal, (deal) => deal.kiosk, { onDelete: "CASCADE" })
  deal: Deal;
  @ManyToMany(() => Category, (category) => category.kiosk, {
    onDelete: "CASCADE",
  })
  @JoinTable()
  categories: Category[];
}
