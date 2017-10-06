require 'rails/application_controller'
require 'swapi'

class StaticController < Rails::ApplicationController
  def index
    render file: Rails.root.join('public', 'index.html')
  end
end
