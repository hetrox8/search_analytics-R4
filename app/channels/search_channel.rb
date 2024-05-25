# app/channels/search_channel.rb
class SearchChannel < ApplicationCable::Channel
  def subscribed
    stream_from "search_channel_#{params[:session_id]}"
  end

  def receive(data)
    query = data['query']
    ActionCable.server.broadcast("search_channel_#{params[:session_id]}", query: query)
    save_search_query(query)
  end

  private

  def save_search_query(query)
    REDIS.setex("search_query_#{params[:session_id]}", 5, query) # Store for 5 seconds
    DebounceJob.perform_later(params[:session_id], query)
  end
end
