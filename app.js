const onSingup = () => {
    const fullName = document.getElementById('fullName')
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    let user = {
        fullName: fullName.value,
        email: email.value,
        password: password.value,
    }

    if (fullName.value !== '' || email.value !== '' || password.value !== '') {

        let users = JSON.parse(localStorage.getItem('users')) || [];

        let userIdx = users.findIndex(function (val) {
            return val.email.toLowerCase() === user.email.toLowerCase()
        });


        if (userIdx === -1) {
            // this user do not exist
            users.push(user);
            // store in storage
            localStorage.setItem("users", JSON.stringify(users));
            // redirect to login page
            location.href = 'login.html';

        } else {
            alert(`this email ${user.email} is already been taken`)
        }
    } else {
        alert('PLZ FILL THIS INPUTS')
    }
}
const onLogin = () => {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    let user = {
        email: email.value,
        password: password.value,
    };


    if (email.value !== '' || password.value !== '') {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        var currentUser = users.find(function (val) {
            return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
        });
        if (currentUser) {
            localStorage.setItem("user", JSON.stringify(currentUser));
            // user login
            location.href = "teams.html";
        } else {
            alert('enter vaild information')
        }
    } else {

        setTimeout(() => {
            location.href = "signup.html"
        }, 2000);
    }
}



let list = document.getElementById('list')
let listMembers = document.getElementById('listMembers')
const onAddMember = () => {

    let todo_Item = document.getElementById("addMember")

    if (todo_Item.value !== "") {

        let li = document.createElement('li')
        li.setAttribute("class", "litext")
        let liText = document.createTextNode(todo_Item.value)
        li.appendChild(liText)

        let delbtn = document.createElement("button")
        let delText = document.createTextNode("DELETE")
        delbtn.setAttribute("class", "btn")
        delbtn.setAttribute("onclick", "deleteItem(this)")
        delbtn.appendChild(delText)

        li.appendChild(delbtn)
        list.appendChild(li)
        listMembers.appendChild(list)
        console.log(listMembers);
        todo_Item.value = ""
    } else {
        alert('plx enter a member email')
    }
}

let deleteItem = (e) => {
    e.parentNode.remove()
}
let onDeleteTeam = (e) => {
    list.innerHTML = ''
}


// let userQues = {
//     question: {
//         ques1,
//         ques2,
//         ques3,
//     }
// }

const onCreateTeam = () => {

    let teamName = document.getElementById('teamName');
    let teamCategopry = document.getElementById('teamCategopry');
    let teamEmail = document.getElementById('teamEmail');
    let teamCatShow = document.getElementById('teamCatShow');
    let teamMemShow = document.getElementById('teamMemShow');
    let createTeam = {
        teamName: teamName.value,
        teamCategopry: teamCategopry.value,
        teamEmail: teamEmail.value
    }
    let userCreateTeam = JSON.parse(localStorage.getItem('createTeam')) || [];
    console.log(userCreateTeam);
    if (teamName.value !== '' || teamCategopry.value !== '' || teamEmail.value !== '') {

        let userIdx = userCreateTeam.findIndex()
        if (userIdx === -1) {
            userCreateTeam.push(createTeam)
            localStorage.setItem("createTeam", JSON.stringify(createTeam));
        } else {
            console.log('plz create yopur Team');
        }
    } else {
        alert('plx fill the properties')
    }




    // store in storage

    // console.log(createTeam);
}