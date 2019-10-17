require 'sinatra'
require 'json'
require 'sinatra/activerecord'
require './lib/thermostat'

set :database_file, 'config/database.yml'

class ThermostatApp < Sinatra::Base
  register Sinatra::ActiveRecordExtension

  enable :sessions

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    Thermostat.find(1).temperature.to_json
  end

  post '/temperature' do
    p params[:temperature]
    Thermostat.find(1).update_attribute(:temperature, params[:temperature])
  end

run! if app_file == $0
end
