function message(){
    var Name = document.getElementById('Name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    var donationtype = document.getElementById('donationtype');
    var quantity= document.getElementById('quantity');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || phone.value === '' || address.value==='' || donationtype.value==='' || quantity.value===''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            phone.value = '';
            donationtype.value = '';
            quantity.value = '';
            address.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}