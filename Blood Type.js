//Blood Types
const Blood_Donor = (Donor, Patient) => {
    let Antigen = true;
    if (Patient.includes("AB")){
        Antigen = true;
    }
    else if (Donor.includes("O")){
        Antigen = true;
    }
    else if (donor[0]===Patient[0]){
        Antigen = true;
    }
    else {
        Antigen = false;
    }

    if (donor.includes("+")&& Patients.includes("-")){
        Rh_factor = false;
    }
    else {
        Rh_factor = true;
    }

    return Antigen && Rh_factor;
}
console.log(`canGiveBlood: {Blood_Donor})`)
