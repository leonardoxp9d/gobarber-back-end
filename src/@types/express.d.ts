declare namespace Express {
    export interface Request {
        user: {
            id: string;
        };
    }
}























/** 2.2.Iniciando back-end do app - 3.Autenticação - Aula 04 - Rotas autenticadas
 * express.d.ts
 * "declare namespace Express{...}" -
 * Isso que dizer que quero sob-escrever uma tipagem de
 * dentro de "Express"
 *
 * Arquivo criado para sob-escrever tipos de uma lib(biblioteca)
 * no caso a lib "express"
 * Isso porque precisamos passar para o "request", a propriedade
 * chamada "user", com o seu "id", e assim poder usar o id em qualquer hora
 * na aplicação, pois estará dentro da "request" das rotas, o "id" do usuário
 * logado(autenticado), assim podendo acessar seus dados no banco de dados,
 *
 * Então semrpe que formos modificar o funcionamento de uma biblioteca(lib)
 * A gente também vai precisa modificar os tipos daquela biblioteca, a
 * tipagem daquela biblioteca(lib)
 * Para isso criamos uma pasta "@types" e criamos o arquivo "express.d.ts"
 * no caso recebe o nome "express" porque é o nome da lib que quero modificar os tipos
 * A exteção e ".d.ts", ou seja "definição de tipos" do exoress
 *
 * "export interface Request {...}"
 * ou seja eu to sob-escrevendo aquela exportação do "Request"
 * "import {Resquest} from 'express'", por exemplo
 * que já existe de dentro do "express"
 * E ae esses dados que colocamos dentro dele:
 * user: { - falamos que tem "usuário" dentro do request
 *   id: string; - que tem um "id" do tipo "string"
 * };
 * Não ira substituir, o dados do "Resquest" e sim anexar
 * isso, junto com os dados do Request, que já existe do "Express"
 * Então estamos adicionando uma inforamção nova dentro do meu
 * "Request"
 *
 * isso foi utilizado no arquivo "ensureAuthenticated;ts", no código:
 * request.user = {
 *     id: sub,
 * };
 *
 * Isso se chama de overwrite(sobescrever), que fizemos na tipagem, tem várias
 * formas de fazer isso
 */
