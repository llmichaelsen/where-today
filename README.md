# Almoço democrático

Sistema desenvolvido para viabilizar uma integração democrática dentre colegas de trabalho, que lutam muito ao decidir um local de almoço que agrade a maioria. Esse sistema vem de forma prática facilitar esse processo e garantir uma amizade mais duradoura dentre o ambiente de trabalho.

## Sobre o projeto
- Projeto desenvolvido com Angular 9.
- Utilizado um template gratuito para estrutura. Sua [licença](https://github.com/llmichaelsen/where-today/blob/master/LICENSE.md).

## Inicializando o projeto
- Faça o download ou clone a pasta do projeto
- Com o terminal: vá até a raiz do projeto
- Execute os comandos: 
> npm intall

> npm start
- Para rodar os testes: 
> npm test

## Usuários para acessar o sistema

- E-mail: 1@test  Password: 1234
- E-mail: 2@test  Password: 1234
- E-mail: 3@test  Password: 1234
- E-mail: 4@test  Password: 1234
- E-mail: 5@test  Password: 1234
- E-mail: 6@test  Password: 1234
- E-mail: 7@test  Password: 1234
- E-mail: 8@test  Password: 1234

## Funcionamento do sistema

- Não existe banco de dados ou estruturas back-end envolvidas. As informações disponibilizadas são geradas em tempo real e ficam em memória no javascript.
- No primeiro acesso ou qualquer vez que a página for atualizada serão geradas **novas informações aleatórias** para popular o sistema.
#### E quais são essas informações que são geradas toda a vez?
- **Restaurantes** diferentes, gerando aleatoriamente seus valores de nome, preço, tipo de cozinha, imagem, etc..
- **Votações** diárias de 30 dias para trás. Nessas votações, cada um dos 8 usuários acima escolhe um dos restaurantes gerados no processo anterior. O usuário tem uma chance de 25% de não participar de uma votação, simulando uma possível ausência. As informações de votação são utilizadas para gerar métricas usadas em partes do sistema.


## Estruturas de informação

### Usuário
Entidade que acessa o sistema com suas informações e participa como ator nas votações diariamente. Os usuários não são gerados aleatoriamente. São fixos e ficam armazenados em um arquivo.

### Restaurante
Estrutura que representa o estabelecimento. Participa das votações como opções aos usuários. Seus dados são gerados aleatoriamente a toda inicialização.

### Voto
Entidade que representa o voto. Guarda informações do usuário votando, restaurante escolhido e data.
É utilizado para definir restaurantes vencedores e gerar dados para métricas e análises. Dados também gerados aleatoriamente.

## Páginas

### Homepage
- Aqui é exposto primeiramente qual o último restaurante vencedor na votação, para que todos possam se despir de preconceitos e preparar o psicológico. O vencedor é escolhido com a maior quantidade de votos no dia. Se houver empate, o critério de desempate é com o menor preço. Se também for igual, sortea-se um dentre os remanescentes.
- Na sessão abaixo é possível votar em qual restaurante você gostaria de democraticamente levar seus colegas em um lugar que gosta.
- Na votação existe uma validação para que o mesmo restaurante não possa ser escolhido novamente. Ou seja, se você tentar votar no mesmo restaurante que foi o ganhador, mostrado na sessão acima, aparecerá uma mensagem de aviso.
- É permitido apenas votar uma vez. Após o voto, o botão não ficará mais visível. Lembrando que: ao atualizar a página, os dados são gerados novamente, habilitando novamente o voto.

### Restaurantes
- Página de listagem de restaurantes disponíveis para votação.

### Detalhe do restaurante
- Onde ficam os detalhes de cada restaurante como nome, preço, tipo de cozinha e endereço. 
- Há também qual seu **maior fomentador**. Pode ser mais de um, pois pode haver empate. Onde baseado na votação gerada, busca-se qual usuário votou mais vezes neste restaurante.

### Usuários
- Página de listagem de usuários participantes do sistema e habilitados para votação.

### Detalhe do usuário
- Onde ficam os detalhes de cada usuário como nome, cargo e imagem. 
- Há também qual seu **restaurante favorito**. Pode ser mais de um, pois pode haver empate. Onde baseado na votação gerada, busca-se qual restaurante este usuário mais votou.
- Exite um campo onde mostra quantas **participações em votações** este usuário possui, baseado na votação gerada no momento. 

## O que poderia ser feito para melhorar o sistema?

Pensando em uma continuidade para o sistema seria interessante agregar funcionalidades como:

- Histórico de últimas votações realizadas;
- Possibilidade de usuários darem notas para restaurantes;
- A partir das notas rankear melhores restaurantes;
- Sugestões de restaurantes baseados no perfil do usuário;
- Usuário poder bloquear restaurante. (talvez naquele não possua opções veganas)
