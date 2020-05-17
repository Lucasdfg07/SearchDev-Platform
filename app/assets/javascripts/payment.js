document.addEventListener("turbolinks:load", function() {
  $( "#be_premium_btn" ).click(function() {
    $('.be_premium').fadeOut(100);
    $('.payments_form').fadeIn(1000);
  });
 
  $("#payment_form").submit(function(e){
    e.preventDefault();
    var form = this;
 
    if(check_credit_card()){
      form.submit();
    }
  });
})
 
function check_credit_card() {
  var cc = new Moip.CreditCard({
    number  : $("#card_number").val(),
    cvc     : $("#card_cvc").val(),
    expMonth: $("#expiration_month").val(),
    expYear : $("#expiration_year").val(),
    pubKey  : $("#public_key").val()
  });
 
  if( cc.isValid()){
    $("#card_hash").val(cc.hash());
    return true;
  }
  else{
    $("#card_hash").val('');
    alert('Invalid credit card. Verify parameters: number, cvc, expiration Month, expiration Year');
    return false;
  }
}