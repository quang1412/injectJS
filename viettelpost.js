// window.onload = function(){
	// if (window.location.hash != '#auto') return
	const doc = document
  let p, a
	let str = prompt('Nhập địa chỉ, sđt', window.localStorage.lastestPhone);
	window.localStorage.lastestPhone = str
	if(str != '' && str != null) { 
		let match = str.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g);
		p = match && match[0]
		a = str.replace(p, '')
	}

	let cod = parseInt(prompt('Nhập COD', window.localStorage.lastestCOD));
	window.localStorage.lastestCOD = cod

	let name = prompt('Nhập Tên', window.localStorage.lastestName);
	window.localStorage.lastestName

	let e = new KeyboardEvent("input", {
    bubbles: true,
    cancelable: true,
    key: "Q",
    char: "Q",
    shiftKey: false
  });

  document.querySelector('#fullName').value = name
  document.querySelector('#autoAddress').value = a
  document.querySelector('#phoneNo').value = p
  document.querySelector('#productName').value = 'Bumkids - Trịnh Hiền'
  document.querySelector('#productWeight').value = 300

  // document.querySelectorAll('#productPrice, #cod').forEach((i, input) => {
  // 	input.value = cod
  // })
  document.querySelector('#otherYeuCauGiao').value = '𝗞𝗵𝗼̂𝗻𝗴 𝗰𝗵𝗼 𝘅𝗲𝗺 𝗵𝗮̀𝗻𝗴, 𝗞𝗵𝗼̂𝗻𝗴 𝗴𝗶𝗮𝗼 đ𝘂̛𝗼̛̣𝗰 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘀𝗵𝗼𝗽'

 	Array.from(document.querySelectorAll(`#phoneNo, #fullName, #autoAddress, #orderNo, 
 		#otherYeuCauGiao, #productName, 
 		#quantity, #productWeight, #dai, #rong, #cao`)).forEach(i => {
    i.dispatchEvent(e);
 	})


  let city
  setInterval(function() {
    const city_n = document.querySelector('#mat-select-3').innerText
    if (city_n == city) return
    city = city_n
    const cod_n = cod + (city == 'TP.Hà Nội' ? 16000 : 23000)
	  Array.from(document.querySelectorAll('#productPrice, #cod')).forEach((input) => {
	  	input.value = cod_n
      input.dispatchEvent(e)
	  }) 
  }, 1000)  
// }
 
