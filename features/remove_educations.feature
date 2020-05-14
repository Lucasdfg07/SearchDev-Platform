# language:pt
 
@javascript
Funcionalidade: Remover educações do Portfólio
  Remove uma educação do Portfólio
 
  Cenário de Fundo:
    Dado usuário está logado
    E possui o portfólio com slug 'my_portfolio'
    E o portfólio possui 1 Educação
    E acessa a página de edição do portfólio
 
  Cenário: Usuário remove uma Educação do Portfolio
    Quando remove a Educação
    Então a Educação é removida do Portfólio