import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1729707211888 implements MigrationInterface {
    name = 'Init1729707211888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "amount" integer NOT NULL, "quantity" integer NOT NULL, "status" character varying NOT NULL DEFAULT 'PENDING', CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fw_user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "UQ_0fa1dd7e7add1b8a0429a4ca4f9" UNIQUE ("username"), CONSTRAINT "PK_482abd646262fe5ff8d77303c7b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fw_user"`);
        await queryRunner.query(`DROP TABLE "item"`);
    }

}
