function calculateBodaFare(){
    let input = prompt("unafika wapi Mkubwa? kilometer ngapi?");
    let distanceInKm =parseInt(input);

    if (isNaN(distanceInKm) || distanceInKm <=0)
    console.log("please input a valid distance in kilometers");
    

    const baseFare = 50;
    const chargePerKm =15;
    const chargePerTrip =distanceInKm*chargePerKm
    const totalFare =baseFare + chargePerTrip;
    
    console.log(`Uko kwote? Io ni ${distanceInKm}`);
    console.log(`Ukikalia pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${chargePerTrip}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`Panda Pikipiki!`);
    return;
}