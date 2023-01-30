import { PACKAGE_TYPE } from "src/common/enums";
import { Merchant } from "src/merchants/entities/merchant.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Membership {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  // @Column({
  //   type: "enum",
  //   enum: PACKAGE_TYPE,
  //   default: PACKAGE_TYPE.SILVER_PACKAGE,
  // })
  // packageName: PACKAGE_TYPE;
  @Column({
    type: "enum", //"enum" is causing error
    enum: PACKAGE_TYPE,
    default: PACKAGE_TYPE.NONE,
  })
  packageName: PACKAGE_TYPE;
  @Column()
  numberOfBranches: number;
  @Column()
  invoicePerMonth: number;
}
