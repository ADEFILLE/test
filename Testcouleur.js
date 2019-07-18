/*field ids*/
var dropdown_cid = '55075421';
var textarea_cid = '55074650';


function fill_textarea(val)
{
    val = $( '#id123-control'+dropdown_cid ).val();
    switch(val) {
        case "76045":
            $( '#id123-control'+textarea_cid ).css("background-color","#2BAF2B");
            $( '#id123-control'+textarea_cid ).css("color","white");
            break;
        case "Proposal":
            $( '#id123-control'+textarea_cid ).css("background-color","#1BA8CE");
            $( '#id123-control'+textarea_cid ).css("color","white");
            break;
        case "Suggestion":
            $( '#id123-control'+textarea_cid ).css("background-color","#FFC83E");
            $( '#id123-control'+textarea_cid ).css("color","#4C4C4C");
            break;
        default:
            $( '#id123-control'+textarea_cid ).css("background-color","#FFE9E9");
            $( '#id123-control'+textarea_cid ).css("color","#4C4C4C");
    }