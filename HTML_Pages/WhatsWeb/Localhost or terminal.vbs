StrIP = InputBox("Enter your phones ip adress")
FindAndReplace "index.html", "<ipAddress>", StrIP
FindAndReplace "starter.js", "<ipAddress>", StrIP
WScript.Echo "Operation Complete! Go to http://" & StrIP & ":2000"

function FindAndReplace(strFilename, strFind, strReplace)
    Set inputFile = CreateObject("Scripting.FileSystemObject").OpenTextFile(strFilename, 1)
    strInputFile = inputFile.ReadAll
    inputFile.Close
    Set inputFile = Nothing
    Set outputFile = CreateObject("Scripting.FileSystemObject").OpenTextFile(strFilename,2,true)
    outputFile.Write Replace(strInputFile, strFind, strReplace)
    outputFile.Close
    Set outputFile = Nothing
end function 