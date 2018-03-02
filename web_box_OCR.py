from aiohttp import web
import socketio
from appJar import gui

sio = socketio.AsyncServer()
app = web.Application()
sio.attach(app)

# create the GUI & set a title
app = gui("Login Form")

# add labels & entries
# in the correct row & column
app.addLabel("userLab", "Username:", 0, 0)
app.addEntry("userEnt", 0, 1)
app.addLabel("passLab", "Password:", 1, 0)
app.addEntry("passEnt", 1, 1)
# start the GUI
app.go()


async def index(request):
    with open('index.html') as f:
        return web.Response(text=f.read(), content_type='text/html')

@sio.on('connect')
def connect(sid, environ):
    print('connect ', sid)
    sio.emit('autoFill', "Ahoj")

@sio.on('do')
def message(sid, data):
    print('message ', data)

@sio.on('disconnect')
def disconnect(sid):
    print('disconnect ', sid)

app.router.add_get('/', index)

if __name__ == '__main__':
    web.run_app(app)







