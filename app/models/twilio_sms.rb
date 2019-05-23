class TwilioSms < ApplicationRecord
    def self.send_message(message)

        client = Twilio::REST::Client.new(ENV["TWILIO_SID"], ENV["TWILIO_AUTH"])

        client.messages.create(
        from: ENV["TWILIO_PHONE"],
        to: ENV["MOBILE_PHONE"],
        body: message
        )
    end
end
