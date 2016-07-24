onload=_=>{
  //all webviews function
  V=_=>document.querySelectorAll('webview')
  //current webview has z-index of 1 to bring it to the front
  //C is the tab index
  v=V()[C=0]
  v.style.zIndex=1

  //current tab has class 'active'
  document.querySelectorAll('#i li')[C].className='active'

  //call uT (updateTabs) whenever a page finishes loading
  //this also accounts for redirects
  v.addEventListener('did-finish-load',uT=_=>{
    //set title and url in tab details
    t.innerText=v.getTitle()
    u.innerText=v.getURL()

    //update tab titles
    Array.from(document.querySelectorAll('#i li a')).map((x,y)=>x.innerText=V()[y].getTitle())
    //reset z-indices
    Array.from(V()).map(x=>x.style.zIndex=0)
    //reset class 'active'
    Array.from(document.querySelectorAll('#i li')).map(x=>x.className='')
    //bring current webview to front
    v.style.zIndex=1
    //set current tab to 'active'
    document.querySelectorAll('#i li')[C].className='active'
  })

  //new webview function
  nV=_=>{
    x=document.createElement('webview')
    x.src='new.html'
    x.autosize='on'
    x.nodeintegration=true
    x.plugins=true
    document.body.appendChild(x)
    //add new tab
    i.innerHTML+=`<li><a>${v.getTitle()}</a></li>`
  }

  //key commands
  s.onkeypress=e=>{
    //all commands are triggered by the enter key
    if(e.which==13){
      e.preventDefault()

      //devtools
      if(s.value.match(/^d */))
        v.openDevTools();
      //go back
      else if(s.value.match(/^< */))
        v.goBack();
      //go forward
      else if(s.value.match(/^> */))
        v.goForward();
      //reload/stop
      else if(s.value.match(/^r */))
        v.isLoading()?v.stop():v.reload();
      //load http-prefixed page
      else if(x=s.value.match(/^h +(.+)/))
        v.src='http://'+x[1];
      //load any page (no auto-prefixing)
      else if(x=s.value.match(/^H +(.+)/))
        v.src=x[1];
      //find in page
      else if(x=s.value.match(/^f(c?) +(.+)/))
        v.findInPage(x[2],{matchCase:!!x[1]});
      //print
      else if(s.value.match(/^p */))
        v.print();
      //search - you can change this to engine of your choice
      else if(x=s.value.match(/^s +(.+)/))
        v.loadURL('https://google.com/search?q='+encodeURIComponent(x[1]));
      //new tab
      else if(s.value.match(/^n */))
        nV(),
        v=V()[C=V().length-1],
        v.addEventListener('did-finish-load',uT);
      //left tab
      else if(x=s.value.match(/^\[ */))
        v=V()[C?--C:C],
        uT();
      //right tab
      else if(x=s.value.match(/^] */))
        v=V()[C<V().length-1?++C:C],
        uT();
      //close tab
      else if((x=s.value.match(/^x */))&&V().length>1)
        document.body.removeChild(v),
        i.removeChild(document.querySelector('li.active')),
        v=V()[C?--C:C],
        uT();

      //reset command input value
      s.value=''
    }
  }
}
