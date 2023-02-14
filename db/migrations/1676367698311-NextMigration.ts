import { MigrationInterface, QueryRunner } from "typeorm";

export class NextMigration1676367698311 implements MigrationInterface {
    name = 'NextMigration1676367698311'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_article" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "name" varchar NOT NULL, "content" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_article"("id", "email", "name", "content", "created_at") SELECT "id", "email", "name", "content", "created_at" FROM "article"`);
        await queryRunner.query(`DROP TABLE "article"`);
        await queryRunner.query(`ALTER TABLE "temporary_article" RENAME TO "article"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" RENAME TO "temporary_article"`);
        await queryRunner.query(`CREATE TABLE "article" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "name" varchar NOT NULL, "content" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime)`);
        await queryRunner.query(`INSERT INTO "article"("id", "email", "name", "content", "created_at") SELECT "id", "email", "name", "content", "created_at" FROM "temporary_article"`);
        await queryRunner.query(`DROP TABLE "temporary_article"`);
    }

}
