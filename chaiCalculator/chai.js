function calculatechaiIngredients(){
    let input = prompt("karibu! How many cups of chaiBora would you like to make?")
    let numberOfCups = parseInt(input);
    if (isNaN(numberOfCups) || numberOfCups <=0){
        console.log("please enter a valid number of cups.");
        return;
    }
    const waterPerCup =200;
    const milkPerCup =50;
    const TeaLeavesPerCup = 1;
    const sugarPerCup =2;
    const totalwater =waterPerCup * numberOfCups;
    const totalMilk=milkPerCup*numberOfCups;
    const totalTeaLeaves=TeaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup*numberOfCups;

    console.log(`to make ${numberOfCups} cups of Kenyan chai, you will need:`);
    console.log(`water: ${totalwater} ml`);
    console.log(`milk:${totalMilk} ml`);
    console.log(`tea Leaves (majani):${totalTeaLeaves} tableslpoons`);
    console.log(`sugar(sukari):${totalSugar} teaspoons`);

    console.log(`Enjoy your Chai Bora!`);
}