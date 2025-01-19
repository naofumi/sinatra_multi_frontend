require 'sinatra'

configure do
  set :port, 3000
  set :default_content_type, :json
end

before do
  headers 'Access-Control-Allow-Origin' => '*'
end

get '/' do
  data = { message: 'Hello World to users page from Sinatra!' }
  [200, data.to_json]
end

get '/admin' do
  data = { message: 'Hello World to admin page from Sinatra!' }
  [200, data.to_json]
end
