const validPin=1234
const ac="12345678910"
document
    .getElementById("add-money-btn")
    .addEventListener("click", function () {
        const bank = document.getElementById("bank").value;
        const accountNumber = document.getElementById("account-number").value;

        const amount = parseInt(document.getElementById("add-amount").value);

        const pinNumber = parseInt(document.getElementById("add-pin").value);

        const availableBalance = parseInt(
            document.getElementById("available-balance").innerText
        );

        if (ac!==accountNumber) {
            alert("Invalid account Number");
            return;
        }

        if (pinNumber !== validPin) {
            alert("Invalid pin Number");
            return;
        }

        const totalNewAvailableBalance = amount + availableBalance;
        document.getElementById("available-balance").innerText =
            totalNewAvailableBalance;
    });
