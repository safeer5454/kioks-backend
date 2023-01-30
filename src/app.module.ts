import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { BranchModule } from "./branch/branch.module";
import { CategoriesModule } from "./categories/categories.module";
import { CafeManagementModule } from "./cafe-management/cafe-management.module";
import { KioskModule } from "./kiosk/kiosk.module";
import { LanguageModule } from "./language/language.module";
import { MembershipModule } from "./membership/membership.module";
import { MerchantsModule } from "./merchants/merchants.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemModule } from "./item/item.module";
import { MulterModule } from "@nestjs/platform-express";
import { DealsModule } from "./deals/deals.module";
import { SidesModule } from "./sides/sides.module";
import { ExtrasModule } from "./extras/extras.module";
import { IngredientsModule } from "./ingredients/ingredients.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "kiosk",
      // entities:[User],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    UserModule,
    MulterModule.register({ dest: "./uploads" }),
    MerchantsModule,
    MembershipModule,
    LanguageModule,
    KioskModule,
    CafeManagementModule,
    CategoriesModule,
    BranchModule,
    ItemModule,
    DealsModule,
    SidesModule,
    ExtrasModule,
    IngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
