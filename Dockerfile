FROM ruby:2.5.1-slim
 
# Instala nossas dependencias
RUN apt-get update && apt-get install -qq -y --no-install-recommends \
    build-essential libpq-dev imagemagick curl
 
# Instalar o GNUPG
RUN apt-get install -y gnupg
 
# Instalar NodeJS v8
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && apt-get install -y nodejs
 
# Instalar o Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update && apt-get install -y yarn
 
 
# Seta nosso path
ENV INSTALL_PATH /portfolio
 
# Cria nosso diretório
RUN mkdir -p $INSTALL_PATH
 
# Seta o nosso path como o diretório principal
WORKDIR $INSTALL_PATH
 
# Copia o nosso Gemfile para dentro do container
COPY Gemfile ./
 
# Seta o path para as Gems
ENV BUNDLE_PATH /box
 
# Copia nosso código para dentro do container
COPY . .