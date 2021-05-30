class Form{
    constructor(){}

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(430,100);

        var input = createInput("Name");
        var button = createButton("Play");
        var greeting = createElement('h3');

        input.position(430,260);
        button.position(480,300);
        
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            PlayerCount+=1;

            player.update(name);
            player.updateCount(PlayerCount);

            greeting.html("Hello "+ name);
            greeting.position(460,260);
        })
    }
}
