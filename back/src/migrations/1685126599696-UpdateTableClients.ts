import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableClients1685126599696 implements MigrationInterface {
    name = 'UpdateTableClients1685126599696'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "registration_date" TO "createdAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "createdAt" TO "registration_date"`);
    }

}
