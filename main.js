(function() {
  var App, BaseScreen, Screen1, Screen2;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  BaseScreen = (function() {
    function BaseScreen() {
      BaseScreen.__super__.constructor.apply(this, arguments);
    }
    __extends(BaseScreen, Ext.Panel);
    BaseScreen.prototype.title = 'Base panel';
    BaseScreen.prototype.iconCls = 'info';
    return BaseScreen;
  })();
  Screen1 = (function() {
    function Screen1() {
      Screen1.__super__.constructor.apply(this, arguments);
    }
    __extends(Screen1, BaseScreen);
    Screen1.prototype.title = 'First screen';
    Screen1.prototype.html = 'Content of one screen';
    return Screen1;
  })();
  Screen2 = (function() {
    function Screen2() {
      Screen2.__super__.constructor.apply(this, arguments);
    }
    __extends(Screen2, BaseScreen);
    Screen2.prototype.title = 'Second screen';
    Screen2.prototype.html = 'Content of another screen';
    return Screen2;
  })();
  App = (function() {
    function App() {
      App.__super__.constructor.apply(this, arguments);
    }
    __extends(App, Ext.TabPanel);
    App.prototype.fullscreen = true;
    App.prototype.tabBar = {
      dock: 'bottom',
      layout: {
        pack: 'center'
      }
    };
    App.prototype.items = [new Screen1, new Screen2];
    return App;
  })();
  Ext.setup({
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
      var app;
      return app = new App;
    }
  });
}).call(this);
