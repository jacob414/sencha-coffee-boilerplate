class BaseScreen extends Ext.Panel
  title: 'Base panel'
  iconCls: 'info'

class Screen1 extends BaseScreen
  title: 'First screen'
  html: 'Content of one screen'

class Screen2 extends BaseScreen
  title: 'Second screen'
  html: 'Content of another screen'

class App extends Ext.TabPanel
  fullscreen: true
  tabBar:
    dock: 'bottom'
    layout: pack: 'center'
  items: [new Screen1, new Screen2]

Ext.setup
  icon: 'icon.png'
  glossOnIcon: false
  onReady: ->
    app = new App
