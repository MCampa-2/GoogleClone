const input = document.getElementById("input");


function googleSearch(){

    input.addEventListener("keyup", function(e){
        const inputValue = input.value;
        const url = `https://www.google.com/search?q=${inputValue}&hl=en&sxsrf=AJOqlzWPPPcpvDgDZv_f8IANf4TfS445yw%3A1676853286816&source=hp&ei=JsDyY8-xL6XJ9AO0rIqQCw&iflsig=AK50M_UAAAAAY_LONl3CoZbDhpEmrlIMKLTYkWF4E-R-&ved=0ahUKEwjP3P6j7aL9AhWlJH0KHTSWArIQ4dUDCAo&uact=5&oq=Hello&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEJECMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMhAILhCxAxCDARDHARDRAxBDMgQIABBDOhEILhCABBCxAxCDARDHARDRAzoLCAAQgAQQsQMQgwE6CwguEIAEELEDEIMBOg4ILhCABBCxAxDHARDRAzoLCC4QgAQQxwEQ0QM6CAgAEIAEELEDUABY1wRgvQZoAHAAeACAAbMDiAGIB5IBCTAuMS4wLjEuMZgBAKABAQ&sclient=gws-wiz`;
        if(e.key === "Enter"){
            window.location.href = url;
        }
    })

}

googleSearch();