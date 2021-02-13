// Ook.?!
function readOok() {
    var textArea = document.getElementById('ook-code');
    var lines = textArea.value.split('\n'); // lines is an array of strings
    // loop through all lines
    var bfCode = " ";
    for (var j = 0; j < lines.length; j++) {
        // compile every line
        switch ( lines[j] ) {
            case "Ook. Ook?":
                bfCode += "> ";
            break;
            case "Ook? Ook.":
                bfCode += "< ";
            break;
            case "Ook. Ook.":
                bfCode += "+ ";
            break;
            case "Ook! Ook!":
                bfCode += "- ";
            break;
            case "Ook! Ook.":
                bfCode += ". ";
            break;
            case "Ook. Ook!":
                bfCode += ", ";
            break;
            case "Ook! Ook?":
                bfCode += "[ ";
            break;
            case "Ook? Ook!":
                bfCode += "] ";
            break;
        };
    };
    bfCode = bfCode.substring(1);
    return bfCode;
};

function toJS() {
    var reading = readOok();
	let compiled = "let b = []; var i = 0; ";
    var source = reading.split(" ");

	for(let i = 0; i < source.length; i++) {
		switch(source[i]) {
			case "+":
				compiled += "b[i]++; ";
				break;
			case "-":
				compiled += "b[i]--; ";
				break;
			case ">":
				compiled += "i++; ";
				break;
			case "<":
				compiled += "i--; ";
				break;
			case "[":
				compiled += "while(b[i] > 0) { ";
				break;
			case "]":
				compiled += "} ";
				break;
			case ".":
				compiled += "r.push(b[i]); ";
				break;
		};
	};
    console.log( eval( compiled ) );
};