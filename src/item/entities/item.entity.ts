import { IsString } from "class-validator";
import { Category } from "src/categories/entities/category.entity";
import { CATEGORY_TYPE, ITEM_TYPE, SIZE_TYPE } from "src/common/enums";
import { Deal } from "src/deals/entities/deal.entity";
import { Extra } from "src/extras/entities/extra.entity";
import { Ingredient } from "src/ingredients/entities/ingredient.entity";
import { Side } from "src/sides/entities/side.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Item {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  image: string;
  @Column()
  name: string;
  @Column()
  price: number;
  @ManyToOne(() => Category, (category) => category.id)
  category: Category;
  @ManyToMany(() => Side, (side) => side.items)
  sides: Side[];
  @Column({ default: false, nullable: true })
  mostSelling: boolean;
  @Column({ type: "enum", enum: SIZE_TYPE })
  size: SIZE_TYPE; //will be remove in future and add three column for L,M,S size
  @Column({ default: true, nullable: true })
  status: boolean;
  @ManyToMany(() => Deal, (deal) => deal.items)
  deal: Deal[];
  @ManyToMany(() => Extra, (extra) => extra.items)
  @JoinTable()
  extras: Extra[];
  @ManyToMany(() => Ingredient, (ingredient) => ingredient.items)
  @JoinTable()
  ingredients: Ingredient[];
}
