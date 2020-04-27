class HttpUrlValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    @value = value
    if value.present? && !valid_url?
      record.errors.add(attribute, "is not a valid url")
    end
  end
 
 
  private
 
 
  def valid_url?
    uri = URI.parse(@value)
    uri.kind_of?(URI::HTTP) || uri.kind_of?(URI::HTTPS)
  rescue URI::InvalidURIError
    return false
  end
end