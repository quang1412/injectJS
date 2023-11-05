$(document).ready(function() {
	if (window.location.hash != '#auto') return

  let urlParams = new URLSearchParams(window.location.search);
  let commentId = urlParams.get('c')
  // let orderNote = urlParams.get('note')
  let from = urlParams.get('f') || 'profile'
  let buyer_id = urlParams.get('b')
  let url_name = urlParams.get('n')
  let url_phone = urlParams.get('p')
  let url_address = urlParams.get('a')
  let url_cod = urlParams.get('cod')
  let cod = parseInt(url_cod)

  // let ggSheetUrl
  // local.get(['ggSheetUrl']).then(result => { ggSheetUrl = result.ggSheetUrl })

  // let buyer = {
  //   uid: buyer_id,
  //   name: url_name,
  //   phone: url_phone,
  //   address: url_address
  // }

  let e = new KeyboardEvent("input", {
    bubbles: true,
    cancelable: true,
    key: "Q",
    char: "Q",
    shiftKey: false
  });

  let phone = prompt("Please enter phone", 0) || 0

  $('#phoneNo').val(url_phone)
  $('#fullName').val(url_name)
  $('#autoAddress').val(url_address)
  // $('#orderNo').val(from.substr(0, 3) + '_' + commentId).attr('disabled', '')
  $('#otherYeuCauGiao').val('𝗞𝗵𝗼̂𝗻𝗴 𝗰𝗵𝗼 𝘅𝗲𝗺 𝗵𝗮̀𝗻𝗴, 𝗞𝗵𝗼̂𝗻𝗴 𝗴𝗶𝗮𝗼 đ𝘂̛𝗼̛̣𝗰 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘀𝗵𝗼𝗽')
  $('#productPrice, #cod').val(cod)
  // $('#productPrice, #cod').val(cod + fee)
  // $('#productPrice').val(url_cod)
  // deafult
  $('#productName').val('Bumkids - Trịnh Hiền')
  $('#quantity').val(1)
  $('#productWeight').val(300)
  $('#dai').val(30)
  $('#rong').val(30)
  $('#cao').val(10)

  // setTimeout(() => {
  // 	$.each($(`#phoneNo, #fullName, #autoAddress, #orderNo, 
  // 		#otherYeuCauGiao, #productPrice, #cod, #productName, 
  // 		#quantity, #productWeight, #dai, #rong, #cao`), (i, element) => {
  // 	  element.dispatchEvent(e);
  // 	})
  // 	$('#autoAddress').focus()
  // }, 1000)

  $.each($(`#phoneNo, #fullName, #autoAddress, #orderNo, 
 		#otherYeuCauGiao, #productPrice, #cod, #productName, 
 		#quantity, #productWeight, #dai, #rong, #cao`), (i, element) => {
    element.dispatchEvent(e);
  })
  $('#phoneNo').focus()


  let city
  setInterval(function() {
    const city_n = $('#mat-select-3').text()
    if (!city_n || city_n == city) return
    city = city_n
    const cod_n = cod + (city == 'TP.Hà Nội' ? 16000 : 23000)
    $('#productPrice, #cod').val(cod_n)
    $.each($(`#productPrice, #cod`), (i, element) => {
      element.dispatchEvent(e)
    })
    // console.log('COD: ', cod_n)
  }, 1000)

  // $('form#createEditForm div:first-child > button.btn-viettel').click(function() {
  //   // nút Gửi ngay
  //   order = {
  //     createTime: new Date().getTime(),
  //     orderId: $('#rowOrderNo1').text(),
  //     commentId: commentId,
  //     buyerId: buyer.uid,
  //     buyerName: $('#fullName').val(),
  //     buyerPhone: $('#phoneNo').val(),
  //     buyerAddress: $('form#createEditForm div.box-receiver small.text-muted:first').text().replace(/X\.|Đ\.|H\.|TP\.|\,+/gi, '').trim(),
  //   }
  //   console.log(order)
  // })

})
