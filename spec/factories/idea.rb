FactoryGirl.define do
  factory :idea do
    title { Faker::Commerce.product_name }
    body { Faker::Lorem.sentence }
  end
end
