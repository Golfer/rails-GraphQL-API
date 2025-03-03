class Project < ApplicationRecord
  has_many :tasks, dependent: :destroy

  # validates :name, present: true
end
