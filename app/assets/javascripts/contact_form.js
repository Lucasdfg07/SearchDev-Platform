$(document).ready(function(){
  $('#contact_form').on('ajax:success', function(e, data, status, xhr){
    M.toast({html: 'Mensagem Enviada', classes: 'custom-green'});
    $('#contact_form').find("input[type=text],input[type=email], textarea").val("");
  }).on('ajax:error',function(e, xhr, status, error){
    M.toast({html: 'Erro no envio', classes: 'custom-green'});
  });
});