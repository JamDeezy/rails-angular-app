Good ol' Rails 4 w/ Angular 1 client ft. Webpack

# Requires
    $ ruby --version
    ruby 2.2.0p0 (2014-12-25 revision 49005) [x86_64-darwin15]
    $ npm --version
    3.10.10
    $ yarn --version
    0.21.3
    $ mysql --version
    mysql  Ver 14.14 Distrib 5.7.10, for osx10.11 (x86_64) using  EditLine wrapper

# Setup Server
    bundle install
    mysql -e "CREATE DATABASE app_development" -u root
    rake db:migrate
    rails server

# Setup Client (copy paste chunk)
    brew update
    brew install npm
    brew install yarn
    cd client
    yarn install
    npm start # runs webpack-dev-server @ localhost:8080