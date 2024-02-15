
var testInput;
var filePath;
var isMode;
var fileObject;

function writeToFile( path, binary, object )
{
 print( "Writing " + path + " to file..." );
 var output = writeFile( path, mode, object );
 print( "The number of bytes written to file was: " + output );
 return output
}

filePath = "test.xml";
isMode = null;
fileObject = testInput;
writeToFile( filePath, isMode, fileObject );




function fileTest() {
    testInput = document.getElementById("test").value;
}