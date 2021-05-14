function caaesar_cipher(string,mode,key){
    for(key;key<26;key++){
    var text="",i;
    var num;
    if(mode=='ENCRYPTION'){
        for (i of string){
            num=((i.charCodeAt()-65)+key)%26;
            text+=(String.fromCharCode(num+65));
        }
        console.log("key["+key+"] "+"ENCRYPTION : "+text);
    }
if(mode=='DECRYPTION'){
        for (i of string){
            num=((i.charCodeAt()+65)-key)%26;
            text+=(String.fromCharCode(num+65));
        }
        console.log("key["+key+"] "+"DYCRYPTION : "+text);
    }
}
}
caaesar_cipher("RGWDTSRSIDKQDWGHWDQGIFYSHOGESQAYA",'DECRYPTION',1);