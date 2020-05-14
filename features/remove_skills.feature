# language:pt
 
@javascript
Funcionalidade: Remover habilidades do Portfólio
  Remove uma habilidade do Portfólio
 
  Cenário de Fundo:
    Dado usuário está logado
    E possui o portfólio com slug 'my_portfolio'
    E o portfólio possui 1 Habilidade
    E acessa a página de edição do portfólio
 
  Cenário: Usuário remove uma Habilidade do Portfolio
    Quando remove a Habilidade
    Então a Habilidade é removida do Portfólio