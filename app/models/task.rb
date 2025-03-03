class Task < ApplicationRecord
  belongs_to :project
  # validates :name, present: true
end
