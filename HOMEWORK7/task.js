function upperCase(text) {
    if (text = /^[A-ZА-Я]/.test(text)) {
        console.log("String's not starts with uppercase character ")
    } else {
        console.log("String's starts with uppercase character ")

    }
}

upperCase('regexp');
upperCase('RegExp');
