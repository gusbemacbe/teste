var display_url = 0
function showmenuie5 () {
  var rightedge = document.body.clientWidth - event.clientX
  var bottomedge = document.body.clientHeight - event.clientY
  if (rightedge < ie5menu.offsetWidth)
    ie5menu.style.left = document.body.scrollLeft + event.clientX - ie5menu.offsetWidth
  else
    ie5menu.style.left = document.body.scrollLeft + event.clientX
  if (bottomedge < ie5menu.offsetHeight)
    ie5menu.style.top = document.body.scrollTop + event.clientY - ie5menu.offsetHeight
  else
    ie5menu.style.top = document.body.scrollTop + event.clientY
  ie5menu.style.visibility = "visible"
  /*ie5menu.style.display="block"*/
  return false
}

function hidemenuie5 () {
  ie5menu.style.visibility = "hidden"
  /*ie5menu.style.display="none"*/
}

function highlightie5 () {
  if (event.target.className == "menuitems") {
    event.target.style.backgroundColor = ""

    // cor ao passar o mouse

    event.target.style.color = "#000000"
    if (display_url == 1)
      window.status = event.target.url
  }
}

function lowlightie5 () {
  if (event.target.className == "menuitems") {
    event.target.style.backgroundColor = ""
    event.target.style.color = "#FFFFFF"
    window.status = ''
  }
}

function jumptoie5 () {
  if (event.target.className == "menuitems")
    window.location = event.target.url
}

document.oncontextmenu = showmenuie5
/*if (document.all&&window.print)*/
document.body.onclick = hidemenuie5

function abremenu (x) {
  if (IE) {
    /*document.all.divinfos[x-1].style.visibility="hidden";*/
    document.all.divinfos[x - 1].style.display = 'block';
    document.all.divinfos[x - 1].style.filter = "blendTrans(duration=.5)";
    document.all.divinfos[x - 1].filters.blendTrans.Apply();
    document.all.divinfos[x - 1].style.visibility = "visible";
    document.all.divinfos[x - 1].filters.blendTrans.Play();
  }
}

function fechamenu (x) {
  if (IE) {
    document.all.divinfos[x - 1].style.visibility = "hidden";
    document.all.divinfos[x - 1].style.display = 'none';
  }
}