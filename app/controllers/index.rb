get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do
  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)
  #Also works with JSON.generate({cell: cell, color: color})
  {cell: cell, color: color}.to_json
end