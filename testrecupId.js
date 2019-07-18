document.getElementsByTagName('a')[0].onclick = recupId;
document.getElementById('riri').onclick = recupId;

function recupId()
{
    if(this.id)
        alert(this.id);

    return false;
}