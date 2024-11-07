dim NIC1, Nic, StrIP
Set NIC1 = GetObject("winmgmts:").InstancesOf("Win32_NetworkAdapterConfiguration")
For Each Nic in NIC1
if Nic.IPEnabled then
        StrIP = Nic.IPAddress(0)
FindAndReplace "index.html", "<ipAddress>", StrIP
FindAndReplace "starter.js", "<ipAddress>", StrIP
WScript.Echo "Operation Complete! Go to http://" & StrIP & ":2000"
end if
next
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