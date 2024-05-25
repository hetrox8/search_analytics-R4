# app/models/search_query.rb
class SearchQuery < ApplicationRecord
  validates :query, presence: true
end
