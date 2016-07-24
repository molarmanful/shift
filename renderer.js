onload=_=>{
  V=_=>document.querySelectorAll('webview')
  v=V()[C=0]
  v.style.zIndex=1
  document.querySelectorAll('#i li')[C].className='active'
  v.addEventListener('did-finish-load',uT=_=>{
    t.innerText=v.getTitle()
    u.innerText=v.getURL()
    Array.from(document.querySelectorAll('#i li a')).map((x,y)=>x.innerText=V()[y].getTitle())
    Array.from(V()).map(x=>x.style.zIndex=0)
    Array.from(document.querySelectorAll('#i li')).map(x=>x.className='')
    v.style.zIndex=1
    document.querySelectorAll('#i li')[C].className='active'
  })
  nV=_=>{
    x=document.createElement('webview')
    x.src='new.html'
    x.autosize='on'
    x.nodeintegration=true
    x.plugins=true
    document.body.appendChild(x)
    i.innerHTML+=`<li><a>${v.getTitle()}</a></li>`
  }
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
      else if(x=s.value.match(/^f(c?) +(.+)/))
        v.findInPage(x[2],{matchCase:!!x[1]});
      else if(s.value.match(/^p */))
        v.print();
      else if(x=s.value.match(/^s +(.+)/))
        v.loadURL('https://google.com/search?q='+encodeURIComponent(x[1]));
      else if(s.value.match(/^n */))
        nV(),
        v=V()[C=V().length-1],
        v.addEventListener('did-finish-load',uT);
      else if(x=s.value.match(/^\[ */))
        v=V()[C?--C:C],
        uT();
      else if(x=s.value.match(/^] */))
        v=V()[C<V().length-1?++C:C],
        uT();
      else if((x=s.value.match(/^x */))&&V().length>1)
        document.body.removeChild(v),
        i.removeChild(document.querySelector('li.active')),
        v=V()[C--,C%=V().length],
        uT();
      s.value=''
    }
  }
}
