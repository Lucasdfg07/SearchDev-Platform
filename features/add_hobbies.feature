# language:pt
 
@javascript
Funcionalidade: Adicionar hobbies ao Portfólio
  Adiciona um novo Hobby ao Portfólio
 
  Cenário de Fundo:
    Dado usuário está logado
    E possui o portfólio com slug 'my_portfolio'
    E o portfólio possui um bloco de Hobbies
    E acessa a página de edição do portfólio
 
  Cenário: Usuário adiciona um novo Hobby ao Portfolio
    Quando adiciona um Hobby
    Então o Hobby é adicionado ao Portfólio