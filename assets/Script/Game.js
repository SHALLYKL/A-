const Grid = require("Grid");
cc.Class({
    extends: cc.Component,

    properties: {
       map:require("Map")
    },

    // use this for initialization
    onLoad: function () {
      
        this.map.randMap(10,10);
    },
    btnObstack(){
        window.GridType = TYPE.NO_PASS;
    },
    btnPass(){
        window.GridType = TYPE.PASS;
    },
    btnStart(){
        window.GridType = TYPE.START;
    },
    btnEnd(){
        window.GridType = TYPE.END;
    },
    // called every frame
    update: function (dt) {

    },
});
