import { Kiosk } from "src/kiosk/entities/kiosk.entity";
import { Merchant } from "src/merchants/entities/merchant.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Branch {
  //branch name should be cafe name branch branch#
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  branchName: string;
  @ManyToOne(() => Merchant, (merchant) => merchant.id, { onDelete: "CASCADE" })
  merchant: Merchant;
  @OneToMany(() => Kiosk, (kiosk) => kiosk.branch)
  kiosks: Kiosk;
}
