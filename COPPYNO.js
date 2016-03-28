function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br/><br/>MUON COPY THI LIÊN HỆ : <a href='https://www.facebook.com/100005776683788'>ĐỖ MẠNH HỒNG"+document.location.pathname+"</a>";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;
