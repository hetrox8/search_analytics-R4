# app/jobs/debounce_job.rb
class DebounceJob < ApplicationJob
  queue_as :default

  def perform(session_id, query)
    sleep 0.5 # Debounce delay
    current_query = REDIS.get("search_query_#{session_id}")
    if current_query == query
      SearchQuery.create!(query: query)
    end
  end
end

