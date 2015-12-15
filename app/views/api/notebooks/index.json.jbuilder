json.array! @notebooks do |notebook|
  json.extract! notebook, :id, :title, :description
end
