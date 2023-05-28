class Review < ApplicationRecord
  belongs_to :list

  validates :rating, presence: true, inclusion: 0..5
  validates :comment, length: { minimum: 6, too_short: "%{count} characters is the minimum allowed"}
end
