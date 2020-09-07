cc.Class({
    editor: {
		disallowMultiple: true
		,menu: "CDNSprite"
		,executeInEditMode:true
		,requireComponent:cc.Sprite
		// ,executionOrder: -5000,
	},
    extends: cc.Component,

    properties: {
        col:{
            default:0,
            notify:function(){
                // (!CC_EDITOR)&&this.refreshSize();
            }
        },
        row:{
            default:0,
            notify:function(){
                // (!CC_EDITOR)&&this.refreshSize();
            } 
        },
        tmp:cc.Prefab
    },
    // use this for initialization
    onLoad: function () {
        
    },
    rand(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    },
    randMap(row,col){
        this.col = col;
        this.row = row;
        this.data = [];
        for(let i=0;i<row;i++){
            let rowData = [];
            for(let j=0;j<col;j++){
                rowData[j] = this.rand(0,1);
            }
            this.data[i] = rowData;
        }
        this.refreshSize();
    },
    refreshSize(){
        if(this.col == 0 && this.row == 0){
            this.width = 0;
            this.height = 0;
        }
        this.node.removeAllChildren();
        for(let i=0;i<this.col*this.row;i++){
            let n = cc.instantiate(this.tmp);
            let row = Math.floor(i/this.col);
            n.getComponent("Grid").type = this.data[row][i%this.col];
            n.getComponent("Grid").row = row;
            n.getComponent("Grid").col = i%this.col;
            n.getComponent("Grid").map = this;
            this.node.addChild(n);
        }
    },
    changeData(row,col,val){
        if(val == TYPE.START){
            if(this.start){
                this.node.children[this.start[0]*this.col+this.start[1]].getComponent("Grid").type = TYPE.PASS;
            }
            this.start = [row,col]; 
        }else if(val == TYPE.END){
            if(this.end){
                this.node.children[this.end[0]*this.col+this.end[1]].getComponent("Grid").type = TYPE.PASS;
            }
            this.end = [row,col];
        }else{
            this.data[row][col] = val;
        }
    },
    // called every frame
    update(dt) {
        
    },
});
