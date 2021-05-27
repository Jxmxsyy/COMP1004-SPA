var firebaseConfig = {
    apiKey: "AIzaSyAz5asyhKvzIAIuxQ4uzbF3tz6ZJS9SSE8",
    authDomain: "comp1004.firebaseapp.com",
    projectId: "comp1004",
    storageBucket: "comp1004.appspot.com",
    messagingSenderId: "265659596031",
    appId: "1:265659596031:web:e1783996cad0b868cea0ca",
    measurementId: "G-RCC4FPFGJR"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function addUser() {
    db.collection("users").add({
        firstName: "James",
        lastName: "Rudd",
        email: "jamesrudd99@gmail.com"
    })
}

function loadDates() {
    const mOpen = document.getElementById("monOpen");
    const mClose = document.getElementById("monClose");
    const tuOpen = document.getElementById("tueOpen");
    const tuClose = document.getElementById("tueClose");
    const wOpen = document.getElementById("wedOpen");
    const wClose = document.getElementById("wedClose");
    const thOpen = document.getElementById("thurOpen");
    const thClose = document.getElementById("thurClose");
    const fOpen = document.getElementById("friOpen");
    const fClose = document.getElementById("friClose");
    const saOpen = document.getElementById("satOpen");
    const saClose = document.getElementById("satClose");
    const suOpen = document.getElementById("sunOpen");
    const suClose = document.getElementById("sunClose");


    db.collection("hours")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                console.log(doc.id, " => ", data);
                const table = document.getElementById("hoursTable");
                const MonRow = document.getElementById("monday")
                mOpen.innerText = data.mondayOpen;
                mClose.innerText = data.mondayClose;
                MonRow.appendChild(mOpen);
                MonRow.appendChild(mClose);
                table.appendChild(MonRow);
                const TuesRow = document.getElementById("tuesday")
                tuOpen.innerText = data.tuesdayOpen;
                tuClose.innerText = data.tuesdayClose;
                TuesRow.appendChild(tuOpen);
                TuesRow.appendChild(tuClose);
                table.appendChild(TuesRow);
                const WedRow = document.getElementById("wednesday")
                wOpen.innerText = data.wednesdayOpen;
                wClose.innerText = data.wednesdayClose;
                WedRow.appendChild(wOpen);
                WedRow.appendChild(wClose);
                table.appendChild(WedRow);
                const ThursRow = document.getElementById("thursday")
                thOpen.innerText = data.thursdayOpen;
                thClose.innerText = data.thursdayClose;
                ThursRow.appendChild(thOpen);
                ThursRow.appendChild(thClose);
                table.appendChild(ThursRow);
                const FriRow = document.getElementById("friday")
                fOpen.innerText = data.fridayOpen;
                fClose.innerText = data.fridayClose;
                FriRow.appendChild(fOpen);
                FriRow.appendChild(fClose);
                table.appendChild(FriRow);
                const SatRow = document.getElementById("saturday")
                saOpen.innerText = data.saturdayOpen;
                saClose.innerText = data.saturdayClose;
                SatRow.appendChild(saOpen);
                SatRow.appendChild(saClose);
                table.appendChild(SatRow);
                const SunRow = document.getElementById("sunday")
                suOpen.innerText = data.sundayOpen;
                suClose.innerText = data.sundayClose;
                SunRow.appendChild(suOpen);
                SunRow.appendChild(suClose);
                table.appendChild(SunRow);                
            })
        })
}

var booking = false;
function readBookings() {
    db.collection("bookings")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                console.log(doc.id, " => ", data);
                const table = document.getElementById("reserveBody");
                data.booking.forEach((booking) => {
                    const tr = document.createElement("tr");
                    const fname = document.createElement("td");
                    fname.innerText = booking.firstName;
                    const lname = document.createElement("td");
                    lname.innerText = booking.lastName;
                    const email = document.createElement("td");
                    email.innerText = booking.email;
                    const phoneNum = document.createElement("td");
                    phoneNum.innerText = booking.phone;
                    const size = document.createElement("td");
                    size.innerText = booking.size;
                    const date = document.createElement("td");
                    date.innerText = booking.date.toDate().toDateString();
                    const time = document.createElement("td");
                    time.innerText = booking.time;

                    tr.appendChild(fname);
                    tr.appendChild(lname);
                    tr.appendChild(email);
                    tr.appendChild(phoneNum);
                    tr.appendChild(size);
                    tr.appendChild(date);
                    tr.appendChild(time);
                    table.appendChild(tr);
                });
            });
        });
    booking = true;
}

function clearBookings() {
    document.getElementById("reserveBody").innerText = ' ';
    booking = false;
}
function toggleBookings() {
    booking ? clearBookings() : readBookings();
}

function changeHours() {
    const monOpen = document.getElementById("mondayOpen").innerHTML;
    const monClose = document.getElementById("mondayClose").innerHTML;
    const tueOpen = document.getElementById("tuesdayOpen").innerHTML;
    const tueClose = document.getElementById("tuesdayClose").innerHTML;
    const wedOpen = document.getElementById("wednesdayOpen").innerHTML;
    const wedClose = document.getElementById("wednesdayClose").innerHTML;
    const thurOpen = document.getElementById("thursdayOpen").innerHTML;
    const thurClose = document.getElementById("thursdayClose").innerHTML;
    const friOpen = document.getElementById("fridayOpen").innerHTML;
    const friClose = document.getElementById("fridayClose").innerHTML;
    const satOpen = document.getElementById("saturdayOpen").innerHTML;
    const satClose = document.getElementById("saturdayClose").innerHTML;
    const sunOpen = document.getElementById("sundayOpen").innerHTML;
    const sunClose = document.getElementById("sundayClose").innerHTML;    

    console.log(monOpen, monClose, tueOpen, tueClose, wedOpen, wedClose, thurOpen, thurClose, friOpen, friClose, satOpen, satClose, sunOpen, sunClose);
    const data = console.log(db.collection("hours").get()
        .then((querySnapshot => {
            db.collection("hours").doc("hours").update({
                mondayOpen: monOpen,
                mondayClose: monClose,
                tuesdayOpen: tueOpen,
                tuesdayClose: tueClose,
                wednesdayOpen: wedOpen,
                wednesdayClose: wedClose,
                thursdayOpen: thurOpen,
                thursdayClose: thurClose,
                fridayOpen: friOpen,
                fridayClose: friClose,
                saturdayOpen: satOpen,
                saturdayClose: satClose,
                sundayOpen: sunOpen,
                sundayClose: sunClose,
            });
            console.log(data);
        })));
    
}

function changeMonday() {
    const monOpen = document.getElementById("mondayOpen").innerHTML;
    const monClose = document.getElementById("mondayClose").innerHTML;

    const data = console.log(db.collection("hours").get()
        .then((querySnapshot => {
            db.collection("hours").doc("hours").update({
                mondayOpen: monOpen,
                mondayClose: monClose,
            });
            console.log(data);
        })));
}
function changeTuesday() {
    const tueOpen = document.getElementById("tuesdayOpen").innerHTML;
    const tueClose = document.getElementById("tuesdayClose").innerHTML;

    const data = console.log(db.collection("hours").get()
        .then((querySnapshot => {
            db.collection("hours").doc("hours").update({
                tuesdayOpen: tueOpen,
                tuesdayClose: tueClose,
            });
            console.log(data);
        })));
}
function changeWednesday() {
    const wedOpen = document.getElementById("wednesdayOpen").innerHTML;
    const wedClose = document.getElementById("wednesdayClose").innerHTML;

    const data = console.log(db.collection("hours").get()
        .then((querySnapshot => {
            db.collection("hours").doc("hours").update({
                wednesdayOpen: wedOpen,
                wednesdayClose: wedClose,
            });
            console.log(data);
        })));
}
function changeThursday() {
    const thursOpen = document.getElementById("thursdayOpen").innerHTML;
    const thursClose = document.getElementById("thursdayClose").innerHTML;

    const data = console.log(db.collection("hours").get()
        .then((querySnapshot => {
            db.collection("hours").doc("hours").update({
                thursdayOpen: thursOpen,
                thursdayClose: thursClose,
            });
            console.log(data);
        })));
}
function changeFriday() {
    const friOpen = document.getElementById("fridayOpen").innerHTML;
    const friClose = document.getElementById("fridayClose").innerHTML;

    const data = console.log(db.collection("hours").get()
        .then((querySnapshot => {
            db.collection("hours").doc("hours").update({
                fridayOpen: friOpen,
                fridayClose: friClose,
            });
            console.log(data);
        })));
}
function changeSaturday() {
    const satOpen = document.getElementById("saturdayOpen").innerHTML;
    const satClose = document.getElementById("saturdayClose").innerHTML;

    const data = console.log(db.collection("hours").get()
        .then((querySnapshot => {
            db.collection("hours").doc("hours").update({
                saturdayOpen: satOpen,
                saturdayClose: satClose,
            });
            console.log(data);
        })));
}
function changeSunday() {
    const sunOpen = document.getElementById("sundayOpen").innerHTML;
    const sunClose = document.getElementById("sundayClose").innerHTML;

    const data = console.log(db.collection("hours").get()
        .then((querySnapshot => {
            db.collection("hours").doc("hours").update({
                sundayOpen: sunOpen,
                sundayClose: sunClose,
            });
            console.log(data);
        })));
}

function handleBooking() {
    const fname = document.getElementById("firstNameInput").value;
    const lname = document.getElementById("lastNameInput").value;
    const emailAdd = document.getElementById("emailInput").value;
    const phoneNum = document.getElementById("phoneNumInput").value;
    const partySize = document.getElementById("partySizeInput").value;
    const date = document.getElementById("dateInput").value;
    const timeStr = document.getElementById("timeInput").value;

    console.log(fname, lname, emailAdd, phoneNum, partySize, date, timeStr);

    if (partySize > 6) {
        alert("Your party size is too large for current Covid guidelines\n Please make sure your party is a max of 6 people");        
    }
    else {
        const data = console.log(db.collection("bookings").get()
            .then((querySnapshot => {
                db.collection("bookings").add({
                    booking: [{
                        firstName: fname,
                        lastName: lname,
                        email: emailAdd,
                        phone: phoneNum,
                        size: partySize,
                        date: firebase.firestore.Timestamp.fromDate(new Date(date)),
                        time: timeStr,
                    }]
                },
                    { merge: true }
                );
                console.log(data);
            })));
        const data2 = console.log(db.collection("covid").get()
            .then((querySnapshot => {
                db.collection("covid").add({
                    firstName: fname,
                    lastName: lname,
                    email: emailAdd,
                    phone: phoneNum,
                    size: partySize,
                    date: firebase.firestore.Timestamp.fromDate(new Date(date)),
                    time: timeStr,
                },
                    { merge: true }
                );
                console.log(data2);
            })));
        document.getElementById("reservation").reset();
    }    
}

function covid() {
    const surname = document.getElementById("SurnameInput").value;
    const date = document.getElementById("DateOfVisitInput").value;
    const time = document.getElementById("TimeOfVisitInput").value;
    const table = document.getElementById("detailsTableBody");
    const newDate = firebase.firestore.Timestamp.fromDate(new Date(date));

    document.getElementById("detailsTableBody").innerText = ' ';

    db.collection("covid").where("date", "==", newDate)
        .get()
        .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    console.log(doc.id, " => ", doc.data());
                    const tr = document.createElement("tr");
                    const fname = document.createElement("td");
                    fname.innerText = data.firstName;
                    const lname = document.createElement("td");
                    lname.innerText = data.lastName;
                    const email = document.createElement("td");
                    email.innerText = data.email;
                    const phoneNum = document.createElement("td");
                    phoneNum.innerText = data.phone;
                    const size = document.createElement("td");
                    size.innerText = data.size;
                    const date = document.createElement("td");
                    date.innerText = data.date.toDate().toDateString();
                    const time = document.createElement("td");
                    time.innerText = data.time;

                    tr.appendChild(fname);
                    tr.appendChild(lname);
                    tr.appendChild(email);
                    tr.appendChild(phoneNum);
                    tr.appendChild(size);
                    tr.appendChild(date);
                    tr.appendChild(time);
                    table.appendChild(tr);
                });
            })
    }
