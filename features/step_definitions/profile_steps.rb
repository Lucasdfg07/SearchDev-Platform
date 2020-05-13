Dado "o portfólio possui um bloco de Perfil" do
  create(:block, kind: :profile, side: :left, portfolio_id: @portfolio.id)
  @profile = create(:profile, portfolio_id: @portfolio.id)
end
 
 
Quando "atualiza o nome do Perfil" do
  fill_in "profile-name", with: "New name"
  page.execute_script("document.getElementById('profile-name').dispatchEvent(new Event('change'));");
  wait_for_ajax
end
 
 
Quando "atualiza o título do Perfil" do
  fill_in "profile-title", with: "New title"
  page.execute_script("document.getElementById('profile-title').dispatchEvent(new Event('change'));");
  wait_for_ajax
end
 
 
Então "o nome do Perfil é atualizado" do
  @profile.reload
  expect(@profile.name).to eq "New name"
end
 
 
Então "o título do Perfil é atualizado" do
  @profile.reload
  expect(@profile.title).to eq "New title"
end