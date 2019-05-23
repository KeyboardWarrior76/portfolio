Rails.application.routes.draw do

  namespace :api do
    
    post "/send_message" => "twilio_sms#send_message"

  end

end
