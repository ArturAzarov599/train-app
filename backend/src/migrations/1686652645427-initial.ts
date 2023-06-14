import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1686652645427 implements MigrationInterface {
    name = 'Initial1686652645427'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`point\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`train\` (\`code\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`type\` enum ('S-Bahn', 'Regional Express', 'Regional Bahn', 'Interregio-Express', 'Intercity', 'Eurocity', 'Eurocity Express', 'Intercity Express') NOT NULL, \`created\` date NOT NULL, PRIMARY KEY (\`code\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`train-schedule\` (\`id\` int NOT NULL AUTO_INCREMENT, \`startDate\` datetime NOT NULL, \`endDate\` datetime NOT NULL, \`distance\` int NOT NULL, \`duration\` int NOT NULL, \`status\` enum ('in progress', 'end', 'cancel', 'finish', 'Waiting for trip') NOT NULL DEFAULT 'Waiting for trip', \`trainCode\` varchar(255) NULL, \`startPointId\` int NULL, \`endPointId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`train-schedule\` ADD CONSTRAINT \`FK_41c7dc41f2852f5fcefe6f6840f\` FOREIGN KEY (\`trainCode\`) REFERENCES \`train\`(\`code\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`train-schedule\` ADD CONSTRAINT \`FK_d428361af9ddaaa263cc16460a9\` FOREIGN KEY (\`startPointId\`) REFERENCES \`point\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`train-schedule\` ADD CONSTRAINT \`FK_f175ebda983f9a8f8a324d4b2c0\` FOREIGN KEY (\`endPointId\`) REFERENCES \`point\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`train-schedule\` DROP FOREIGN KEY \`FK_f175ebda983f9a8f8a324d4b2c0\``);
        await queryRunner.query(`ALTER TABLE \`train-schedule\` DROP FOREIGN KEY \`FK_d428361af9ddaaa263cc16460a9\``);
        await queryRunner.query(`ALTER TABLE \`train-schedule\` DROP FOREIGN KEY \`FK_41c7dc41f2852f5fcefe6f6840f\``);
        await queryRunner.query(`DROP TABLE \`train-schedule\``);
        await queryRunner.query(`DROP TABLE \`train\``);
        await queryRunner.query(`DROP TABLE \`point\``);
    }

}
