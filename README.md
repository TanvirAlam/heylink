### Haylink: RESTAPI: Nodejs, Express, Mysql, typescript

- Created Project with typescript, cors issue and using express to run a local Server
- Creating config for mysql connection, keeping it as it is, but would prefer getting it from ENV file
- Create DB: `haylinkdb` manually in mysql workbench
- Using `Sequelize`, makes it easy to manage a MySQL database, Sequelize is an Object-Relational Mapper
  - Creating new table: `payment_note`
      ```sql
      CREATE TABLE `haylinkdb`.`payment_note` (
          `payment_note_uuid` INT NOT NULL,
          `payment_note_period_from_datetime` DATETIME NULL,
          `payment_note_period_to_datetime` DATETIME NULL,
          `payment_note_created_datetime` DATETIME NULL,
          `payment_note_transactions_count` VARCHAR(45) NULL,
          `payment_note_value` VARCHAR(45) NULL,
          `payment_note_status_code` VARCHAR(45) NULL,
          PRIMARY KEY (`payment_note_uuid`),
          UNIQUE INDEX `payment_note_uuid_UNIQUE` (`payment_note_uuid` ASC) VISIBLE);
      ```
- Installing MySQL workbench
- Create Models: `transaction.model` and `payment_note.model`
