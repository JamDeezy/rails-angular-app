Rails.application.routes.draw do
  root 'application#app'

  scope 'api' do
    get '/' => 'api#index'
  end

  match "*path" => "application#app", via: [:get]
end
