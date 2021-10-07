import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1617559819083 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users', 
                columns: [
                    {
                        name: 'id', 
                        type: 'uuid', 
                        isPrimary: true, 
                        generationStrategy: 'uuid', 
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name', 
                        type: 'varchar', 
                    },
                    {
                        name: 'email', 
                        type: 'varchar',
                        isUnique: true, 
                    },
                    {
                        name: 'password', 
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()', 
                    },
                    {
                        name: 'updated_at', 
                        type: 'timestamp',
                        default: 'now()', 
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users'); // método para deletar a tabela "users"
    }
}

/** Iniciando back-end do app - 2.Cadastro de Usuários - Aula 01 - Model e migration de usuários
 *  Nessa aula vamos começar definindo nosso model de usuario que é como nosso
 * usuário vai ser salvo no banco de dados, quais informações dele que vamos armazenar
 * E também claro criar nossa "tabela" no banco de dados utilizando nossa "migration"
 * no caso ".... CreateUsers.ts"
 *
 * Então vamos começar criando nossa migration/arquivo "CreateUser.ts"
 * no terminal VScode com o comando:
 * "yarn typeorm migration:create -n CreateUsers"
 * CreateUsers - e o nome da minha migration
 *
 * Depois de ter feito a migration(esse arquivo) e estando com o banco de dados conectado
 * e só executar no terminal do VScode o comando:
 * "yarn typeorm migration:run"
 * Esse comando vai executar a migration, o método up
 * e vai salvar no banco de dados, as alterações (alterando ou criando uma tabela ou coluna nova)
 * Isso vai criar a tabela de "migrations", onde armazena
 * as "migrations" que foram executadas, dentro do meu sistema
 * e a tabela que foi trabalhada aqui no caso a "appointments", onde vai ter as
 * colunas que criamos
 *
 * Para apagar essa migration, e só executar no VScode o comando:
 * "yarn typeorm migration:revert"
 * ou seja executa o método "down"
 *
 * O comando:
 * "yarn typeorm migration:show"
 * mostra as migrations que foram executadas
 */
