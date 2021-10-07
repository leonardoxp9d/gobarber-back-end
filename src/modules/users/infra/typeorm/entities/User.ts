import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import uploadConfig from '@config/upload';

import { Exclude, Expose } from 'class-transformer';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    @Exclude() 
    password: string;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Expose({name: 'avatar_url'})
    getAvatarUrl(): string | null {
        if(!this.avatar) {
            return null
        }
        switch(uploadConfig.driver){
            case 'disk':
                return `${process.env.APP_API_URL}/files/${this.avatar}`;
            case 's3':
                return `url do amazon aws`
            default:
                return null;
        }
    }
}

export default User;

/** Iniciando back-end do app - 2.Cadastro de Usuários - Aula 01 - Model e migration de usuários
 * User.ts - arquivo de model do Usuário aqui vai ter quais dados do usuário que
 * são armazenados no banco de dados
 * Essa entidade/model, e escrita em formato de classe,
 * e ae definimos os dados que ela irá ter, com seus respectivos tipos
 * e parecido quando a gente construi uma "interface", para definir o formato do "objeto"
 */
