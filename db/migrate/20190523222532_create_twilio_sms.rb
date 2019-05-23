class CreateTwilioSms < ActiveRecord::Migration[5.2]
  def change
    create_table :twilio_sms do |t|

      t.timestamps
    end
  end
end
