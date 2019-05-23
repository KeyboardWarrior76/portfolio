class Api::TwilioSmsController < ApplicationController
    def send_message
        TwilioSms.send_message(params[:message])
    end

end
