// Brain Bonk
function toCode() {
    var textArea = document.getElementById("brain-code").value;
    var source = textArea.split(" ");
    
	var compiled = "var i = 0;\nlet b = [i];\nvar r = [];\n";
     
	for(var i = 0; i < source.length; i++) {
		switch( source[i] ) {
			case '+':
				compiled += "b[i]++;\n";
				break;
			case '-':
				compiled += "b[i]--;\n";
				break;
			case '>':
				compiled += "i++;\n";
				break;
			case '<':
				compiled += "i--;\n";
				break;
			case '[':
				compiled += "while(b[i] > 0) {\n";
				break;
			case ']':
				compiled += "};\n";
				break;
			case '.':
				compiled += "r.push(b[i]);\n";
				break;
            default:
                console.log("Unrecognized character!");
                break;
		};
        compiled += "var res = r.join('');\nconsole.log(res)";
        var result = eval( compiled );
        console.log( result );
	};
}

var button = document.getElementById("btn")
button.onclick = toCode();