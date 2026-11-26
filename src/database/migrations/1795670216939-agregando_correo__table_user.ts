import { MigrationInterface, QueryRunner } from "typeorm";

export class AgregandoCorreo_tableUser1795670216939 implements MigrationInterface {
    name = 'AgregandoCorreo_tableUser1795670216939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

}
