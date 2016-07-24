e=require('electron')
a=e.app
w=e.BrowserWindow
g=e.globalShortcut

var W
ws=[]
cW=_=>{
  W=new w({fullscreen:true,defaultEncoding:'UTF-8'})
  W.loadURL(`file:///${__dirname}/index.html`)
  W.on('closed',_=>{
    ~ws.indexOf(W)&&ws.splice(W,1)
    W=null
  })
  ws.push(W)
}

a.on('ready',_=>{
  g.register('CommandOrControl+N',_=>{
    cW()
  })
  cW()
})
