class Player{
    constructor(){}

    getCount(){
        var PlayerCountRef = database.ref('PlayerCount');
        PlayerCountRef.on("value",function(data){
            PlayerCount  = data.val();  
        })
    }


    updateCount(count){
        database.ref('/').update({
            PlayerCount : count
        })
    }


    update(name){
        var playerIndex =  "Player"+ PlayerCount;
        database.ref(playerIndex).set({
            name : name
        })
    }

}