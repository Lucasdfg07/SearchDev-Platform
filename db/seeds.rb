User.create(email: 'example@onebitcode.com', password: '123456', password_confirmation: '123456')
Portfolio.create(user: User.last, slug: 'leoscorza')
 
Profile.create(title: 'Full Stack Programmer', name: 'Leonardo Scorza', portfolio: Portfolio.last)
Block.create(portfolio: Portfolio.last, kind: :profile, side: :left, position: 1)
 
About.create(description: 'example', portfolio: Portfolio.last)
Block.create(portfolio: Portfolio.last, kind: :about, side: :left, position: 2)
 
Contact.create(portfolio: Portfolio.last, email: 'user@onebitcode.com', phone: '999', website: 'https://onebitcode.com', address_country: 'Brasil')
Block.create(portfolio: Portfolio.last, kind: :contact, side: :left, position: 3)
 
Social.create(kind: :facebook, url: 'https://www.facebook.com/onebitcode', portfolio: Portfolio.last)
Block.create(portfolio: Portfolio.last, kind: :social, side: :left, position: 4)
 
Experience.create(title: 'Bootcamp SFS', description: 'great course', start_date: Time.now - 2.years, company: 'OneBitCode', portfolio: Portfolio.last)
Block.create(portfolio: Portfolio.last, kind: :experience, side: :right, position: 1)
 
Education.create(title: 'Bootcamp SFS', description: 'great course', start_date: Time.now - 2.years, institution: 'OneBitCode', portfolio: Portfolio.last)
Block.create(portfolio: Portfolio.last, kind: :education, side: :right, position: 2)
 
Hobby.create(title: 'Play Tenis', percent: 30, portfolio: Portfolio.last)
Block.create(portfolio: Portfolio.last, kind: :hobby, side: :right, position: 3)
 
Skill.create(title: 'Play Ruby', percent: 90, portfolio: Portfolio.last)
Block.create(portfolio: Portfolio.last, kind: :skill, side: :right, position: 4)
 
Language.create(title: 'Italian', percent: 40, portfolio: Portfolio.last)
Block.create(portfolio: Portfolio.last, kind: :language, side: :right, position: 5)
 
block = Block.create(portfolio: Portfolio.last, kind: :additional_information, side: :right, position: 6)
AdditionalInformation.create(title: 'example', description: '<h4>Hello</h4><hr><h4>World</h4>', portfolio: Portfolio.last, block: block)
 
Block.create(portfolio: Portfolio.last, kind: :contact_form, side: :right, position: 7)

languages = [
              'ruby', 'ruby on rails', 'python', 'django', 'javascript', 'vuejs',
              'react', 'angular', 'ionic', 'react native', 'java', 'c', 'c++', 'c#',
              'elixir', 'phoenix', 'html', 'css', 'bootstrap', 'materialize', 'swift',
              'kotlin', 'machine learning', 'fortran', 'r', 'go', 'php', 'laravel', 'sql',
              'mongodob', 'postgres', 'mysql', 'lua', 'lisp', 'perl'
            ]
 
languages.each do |language|
  Tag.create(title: language)
end