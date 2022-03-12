function Payrol() {
    //var Fn = document.getElementById('Fname').value
    //var Sn = document.getElementById('sname').value
    var fn = document.getElementById('fn').value
    var sn = document.getElementById('sn').value
    var Tr = document.getElementById('Tr').value
    var Ma = document.getElementById('Ma').value
    var Da = document.getElementById('Da').value
    var Me = document.getElementById('Me').value

    // store usernames

    var storageFn = fn
    var storageSn = sn
    localStorage.setItem("StorageFname", storageFn);
    localStorage.setItem("StorageSname", storageSn);

    //End Username Storage

    var Allowance = document.getElementById('Alw');
    var i = Allowance.selectedIndex;
    var selected_text = Allowance.options[i].value


    ans = parseInt(Tr) + parseInt(Ma) + parseInt(Da) + parseInt(Me)

    var weekly = ans * 7
    var monthly = weekly * 4
    var semi_annualy = monthly * 6
    var annualy = semi_annualy * 2

    if (selected_text === "2") {
        alert(weekly);
        var storageWeekly = weekly
        localStorage.setItem("StorageWeekly", storageWeekly);

        alert(localStorage.getItem("StorageWeekly"))

    } else if (selected_text === "3") {
        var storagemonthly = monthly
        localStorage.setItem("Storagemonthly", storagemonthly);

        alert(localStorage.getItem("Storagemonthly"))


        if (monthly < 10000) { alert('abeg japa') }
    } else if (selected_text === "4") {
        //alert(semi_annualy);

        var storagesemi_annualy = semi_annualy
        localStorage.setItem("StorageSemiAnnual", storagesemi_annualy);
        alert(localStorage.getItem("StorageSemiAnnual"))

    } else if (selected_text === "5") {
        var StorageAnnual = annualy;
        localStorage.setItem("StorageAnnual", StorageAnnual);
        alert(localStorage.getItem("StorageAnnual"))
    }
}