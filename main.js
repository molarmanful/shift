//initial stuff
e=require('electron')
a=e.app
w=e.BrowserWindow
g=e.globalShortcut

//global instance of window, idk if necessary
var W

//array of windows
ws=[]

//create window function
cW=_=>{
  W=new w({fullscreen:true,defaultEncoding:'UTF-8'})
  W.loadURL(`file:///${__dirname}/index.html`)

  //window closing
  W.on('closed',_=>{
    ~ws.indexOf(W)&&ws.splice(W,1)
    W=null
  })

  ws.push(W)
}

//launch w/ new window
a.on('ready',_=>{
  //Cmd-N => new window
  g.register('CommandOrControl+N',_=>{
    cW()
  })
  
  cW()
})
