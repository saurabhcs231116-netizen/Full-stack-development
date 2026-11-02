function submit() {

    let name = document.getElementById("name").value;
    console.log(name);

    let isvalid = true;

    for (let i = 0; i < name.length; i++) {

        if (
            (name.charAt(i) >= 'A' && name.charAt(i) <= 'Z') ||
            (name.charAt(i) >= 'a' && name.charAt(i) <= 'z') ||
            (name.charAt(i) === ' ')
        ) {
            isvalid = true;
        } else {
            isvalid = false;
            break;
        }
    }

    if (isvalid === true) {
        console.log("valid");
    } else {
        console.log("invalid");
    }
}