onload=_=>{
  v=document.querySelector('webview')
  s.onkeypress=e=>{
    if(e.which==13){
      e.preventDefault()
      if(s.value.match(/^d */))
        v.openDevTools();
      else if(s.value.match(/^< */))
        v.goBack();
      else if(s.value.match(/^> */))
        v.goForward();
      else if(s.value.match(/^r */))
        v.isLoading()?v.stop():v.reload();
      else if(x=s.value.match(/^h +(.+)/))
        v.src='http://'+x[1];
      else if(x=s.value.match(/^H +(.+)/))
        v.src=x[1];
      else if(x=s.value.match(/^css +(.+)/))
        v.insertCSS(x[1]);
      else if(x=s.value.match(/^js +(.+)/))
        v.executeJavascript(x[1]);
      else if(x=s.value.match(/^f(c?) +(.+)/))
        v.findInPage(x[2],{matchCase:!!x[1]});
      else if(s.value.match(/^p */))
        v.print();
      else if(x=s.value.match(/^s +(.+)/))
        v.loadURL('https://google.com/search?q='+encodeURIComponent(x[1]));
      s.value=''
    }
  }
  v.addEventListener('did-finish-load',_=>{
    t.innerText=v.getTitle()
    u.innerText=v.getURL()
  })
}
