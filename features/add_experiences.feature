# language:pt
 
@javascript
Funcionalidade: Adicionar experiências ao Portfólio
  Adiciona uma nova experiência ao Portfólio
 
  Cenário de Fundo:
    Dado usuário está logado
    E possui o portfólio com slug 'my_portfolio'
    E o portfólio possui um bloco de Experiência
    E acessa a página de edição do portfólio
 
  Cenário: Usuário adiciona uma nova experiência ao Portfolio
    Quando adiciona uma Experiência
    Então a Experiência é adicionada ao Portfólio