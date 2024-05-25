# app/controllers/analytics_controller.rb
class AnalyticsController < ApplicationController
  def index
    @analytics = SearchQuery.group(:query).order('count_all DESC').count
    render json: @analytics.map { |query, count| { query: query, count: count } }
  end
end
