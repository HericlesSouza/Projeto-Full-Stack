import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTables1685366506486 implements MigrationInterface {
    name = 'AlterTables1685366506486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "registration_date" TO "createdAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "createdAt" TO "registration_date"`);
    }

}
