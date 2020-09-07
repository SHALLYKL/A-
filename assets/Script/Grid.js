cc.Class({
    extends: cc.Component,
    properties: {
        size:{
            default:cc.size(10,10),
            notify:function(){
                this.refreshSize();
            }
        },
        type:{
            default:1,
            type:window.TYPE,
            notify:function(){
                this.refreshType();
            }
        }
    },
    // use this for initialization
    onLoad(){},
    onChangeType(){
        this.type = window.GridType;
        this.map.changeData(this.row,this.col,this.type);
    },
    refreshSize(){
        this.node.width =this.size.width;
        this.node.height =this.size.height;
    },
    refreshType(){
        if(this.type==TYPE.END){
            this.node.color = cc.color("#06A202");
        }else if(this.type==TYPE.START){
            this.node.color = cc.color("#0069B3");
        }else{
            this.node.color = this.type==window.TYPE.PASS?cc.color(255,255,255):cc.color(255,0,0);
        }
    },
    // called every frame
    update(dt) {
        
    },
});
