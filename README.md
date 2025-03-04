# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
 3.3.7

* System dependencies

* Configuration

* Database 
 Mysql

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)
  background Sidekiq

* Deployment instructions
  - plan to use Kamal 2 as new rails 8 tool
    
To run application need to have a few steps
 - bundle exec rails s
 - redis-server
 - yarn watch
 - yarn build:css --watch 
 - bundle exec sidekiq
 - bundle exec anycable rails install

In future 
 fix problem with auto update tasks
 finish setup Docker, docker compose
 configure and run test deploy using Kamal(wants to test it)


