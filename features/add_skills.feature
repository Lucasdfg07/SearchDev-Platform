# language:pt
 
@javascript
Funcionalidade: Adicionar habilidades ao Portfólio
  Adiciona uma nova habilidade ao Portfólio
 
  Cenário de Fundo:
    Dado usuário está logado
    E possui o portfólio com slug 'my_portfolio'
    E o portfólio possui um bloco de Habilidades
    E acessa a página de edição do portfólio
 
  Cenário: Usuário adiciona uma nova habilidade ao Portfolio
    Quando adiciona uma Habilidade
    Então a Habilidade é adicionada ao Portfólio