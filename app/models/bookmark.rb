class Bookmark < ApplicationRecord
  belongs_to :movie
  belongs_to :list

  validates :comment, length: { minimum: 6, too_short: "%{count} characters is the minimum allowed"}
  validates :list, uniqueness: { scope: :movie }
end
