class Review < ApplicationRecord
  belongs_to :list

  validates :rating, presence: true
  validates :comment, length: { minimum: 6, too_short: "%{count} characters is the minimum allowed"}
end
