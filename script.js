const wrapper = document.querySelector(".wrapper"),
qrin = wrapper.querySelector(".form input"),
qrimg = wrapper.querySelector(".qr-code img"),
genBtn = wrapper.querySelector(".form button");

genBtn.addEventListener("click", ()=> {

    qrval = qrin.value;
    if(!qrval) return;

    genBtn.innerText = "Generating QR Code..";
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrval}`;
    qrimg.addEventListener("load", () => {

    	wrapper.classList.add("active");
    	genBtn.innerText = "Generate QR Code";
    });
    

});

qrin.addEventListener("keyup", () => {

	if(!qrin.value)
	{
		wrapper.classList.remove("active");
	}
});