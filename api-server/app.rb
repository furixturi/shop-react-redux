require 'sinatra'
require 'sinatra/json'
require 'json'
require 'sinatra/cross_origin'

configure do
  enable :cross_origin
end

get '/items' do
  data = File.read('./json/all.json')
  response = JSON.load(data)

  json response, content_type: :js
end

get '/items/:id' do
  idx = params['id'].to_i - 1

  data = File.read('./json/all.json')
  response = JSON.load(data)

  json response['data'][idx], content_type: :js
end

get '/categories' do
  data = File.read('./json/categories.json')
  response = JSON.load(data)

  json response, content_type: :js
end

get '/not_found' do
  status 404
end
