//Add Donation and remove main balance Function
function workDonation(donate_btn, input_Amount, donate_Amount, donate_Address, main_Balance) {
    document.getElementById(donate_btn).addEventListener('click', function() {
        const inputAmount = inputValue(input_Amount);
        const donateAmount = textValue(donate_Amount);
        const mainAmount = textValue(main_Balance);
        const emptyInput = document.getElementById(input_Amount).value.trim();
    
        if( emptyInput === '') {

            onclick = my_modal_4.showModal();
            // Print the invalid data in Modal
            const valueOfinput = document.getElementById(input_Amount).value;
            document.getElementById('invalidText').innerText = valueOfinput;

            document.getElementById('recomment').innerText = 'Input is Empty';
        }
        else if( isNaN(inputAmount)) {

            onclick = my_modal_4.showModal();
            // Print the invalid data in Modal
            const valueOfinput = document.getElementById(input_Amount).value;
            document.getElementById('invalidText').innerText = valueOfinput;

            document.getElementById('recomment').innerText = 'Input is Not a Number';
        }
        else if( mainAmount < inputAmount) {

            onclick = my_modal_4.showModal();
            // Print the invalid data in Modal
            const valueOfinput = document.getElementById(input_Amount).value;
            document.getElementById('invalidText').innerText = valueOfinput;

            document.getElementById('recomment').innerText = 'Your Main Balance is Low';
        }
        else if( 0 > inputAmount) {

            onclick = my_modal_4.showModal();
            // Print the invalid data in Modal
            const valueOfinput = document.getElementById(input_Amount).value;
            document.getElementById('invalidText').innerText = valueOfinput;

            document.getElementById('recomment').innerText = 'Input is Nagative';
        }

        else {
            // remove Balance from main balance
            const currentMainBalance = mainAmount - inputAmount;
            document.getElementById(main_Balance).innerText = currentMainBalance;
            // add balance to donate balance
            const currentDonateBalance = donateAmount + inputAmount;
            document.getElementById(donate_Amount).innerText = currentDonateBalance;
            // Store The Information in History
            const historySection = document.getElementById('pageHistory');
            const add = document.createElement('div');
            add.innerHTML = `
                <div class="mx-auto border-2 p-8 rounded-xl my-3">
                    <h1 class="text-xl font-bold">${inputAmount} Taka is Donate for Flood at Noakhali, Bangladesh</h1>
                    <p class="text-base font-light mt-4">Date: ${new Date().toString()}</p>
                </div>`;
            historySection.appendChild(add);

            // Show Modal
            onclick = my_modal_5.showModal();
            // Change Modal P tag
            const donatText = document.getElementById(donate_Address).innerText;
            const Text = 'You have';
            const newText = Text + ' ' + donatText;
            document.getElementById('modalText').innerText = newText;
            

            //Clear The Input Box
            document.getElementById(input_Amount).value = '';

        }
    });
}

// Call function and used
workDonation('donate_btn_1', 'input_Amount_1', 'donate_Amount_1', 'donate_Address_1', 'main_Balance');
workDonation('donate_btn_2', 'input_Amount_2', 'donate_Amount_2', 'donate_Address_2', 'main_Balance');
workDonation('donate_btn_3', 'input_Amount_3', 'donate_Amount_3', 'donate_Address_3', 'main_Balance');
workDonation('donate_btn_4', 'input_Amount_4', 'donate_Amount_4', 'donate_Address_4', 'main_Balance');