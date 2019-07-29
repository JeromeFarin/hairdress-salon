<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190729185925 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE prestation CHANGE price_ht price VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE reservation_info CHANGE price_ht price VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C849552A13690');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C84955DC2902E0');
        $this->addSql('DROP INDEX IDX_42C849552A13690 ON reservation');
        $this->addSql('DROP INDEX IDX_42C84955DC2902E0 ON reservation');
        $this->addSql('ALTER TABLE reservation ADD client_id INT NOT NULL, ADD staff_id INT NOT NULL, DROP client_id_id, DROP staff_id_id');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C8495519EB6921 FOREIGN KEY (client_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955D4D57CD FOREIGN KEY (staff_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_42C8495519EB6921 ON reservation (client_id)');
        $this->addSql('CREATE INDEX IDX_42C84955D4D57CD ON reservation (staff_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE prestation CHANGE price price_ht VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C8495519EB6921');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C84955D4D57CD');
        $this->addSql('DROP INDEX IDX_42C8495519EB6921 ON reservation');
        $this->addSql('DROP INDEX IDX_42C84955D4D57CD ON reservation');
        $this->addSql('ALTER TABLE reservation ADD client_id_id INT NOT NULL, ADD staff_id_id INT NOT NULL, DROP client_id, DROP staff_id');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C849552A13690 FOREIGN KEY (staff_id_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955DC2902E0 FOREIGN KEY (client_id_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_42C849552A13690 ON reservation (staff_id_id)');
        $this->addSql('CREATE INDEX IDX_42C84955DC2902E0 ON reservation (client_id_id)');
        $this->addSql('ALTER TABLE reservation_info CHANGE price price_ht VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci');
    }
}
