# language:pt
 
@javascript
Funcionalidade: Adicionar educações ao Portfólio
  Adiciona uma nova educação ao Portfólio
 
  Cenário de Fundo:
    Dado usuário está logado
    E possui o portfólio com slug 'my_portfolio'
    E o portfólio possui um bloco de Educação
    E acessa a página de edição do portfólio
 
  Cenário: Usuário adiciona uma nova educação ao Portfolio
    Quando adiciona uma Educação
    Então a Educação é adicionada ao Portfólio