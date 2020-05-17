# language:pt
 
@javascript
Funcionalidade: Atualizar card de Perfil
  Editar os campos do card de Perfil
 
  Cenário de Fundo:
    Dado usuário está logado
    E possui o portfólio com slug 'my_portfolio'
    E o portfólio possui um bloco de Perfil
    E acessa a página de edição do portfólio
 
  Cenário: Usuário atualiza o nome no card Perfil
    Quando atualiza o nome do Perfil
    Então o nome do Perfil é atualizado
 
  Cenário: Usuário atualiza o título no card Perfil
    Quando atualiza o título do Perfil
    Então o título do Perfil é atualizado