var x = msg.payload.authentication;

if(x === true){
    flow.set("authentication", "approved");
}
if(x === false){
    flow.set("authentication", "declined");
}
