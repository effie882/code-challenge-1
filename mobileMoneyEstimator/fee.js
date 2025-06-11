function estimateTransactionFee(){
    let input = prompt("Unatuma Ngapi? (KES):");
    const amountToSend= parseFloat(input);


    if (isNaN(amountToSend) || amountToSend <=0)
        console.log("please input a valid amount");

    let fee=0.015*amountToSend;
    if (fee <=10){
        fee = 10;
    }
    else if (fee>=70){
        fee = 70;
    }
    const totalAmount=amountToSend + fee;

    console.log(`sending KES ${amountToSend}`);
    console.log(`calculated transaction Fee: KES ${fee}`);
    console.log(`total amount to be debited: KES ${totalAmount}`);

    console.log(`Send Money Securely!`);

}