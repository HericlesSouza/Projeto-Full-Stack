import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTable1685657632992 implements MigrationInterface {
    name = 'AlterTable1685657632992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_43ad4cb7f6a1d67a5dd9dd24bf9" UNIQUE ("full_name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_43ad4cb7f6a1d67a5dd9dd24bf9"`);
    }

}
