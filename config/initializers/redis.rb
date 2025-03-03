module RedisConn
  def self.current
    @redis ||= Redis.new(url: ENV.fetch("REDIS_URL") { "redis://redis:6379/0" })
  end
end
