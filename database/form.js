class Form {
    constructor(){
        this.input = createInput('Name');
        this.button = createButton('Play');
        this.greet = createElement('h3');
    }

    hideAll(){
        this.greet.hide();
        this.input.hide();
        this.button.hide();
    }

    display()
    {
        var title = createElement('h1');
        title.html('Car Race');
        title.position((displayWidth/2) - 50,0);

        this.input.position((displayWidth/2) - 50,(displayHeight/2) - 400);
    
        this.button.position((displayWidth/2) + 30,(displayHeight/2) - 300);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            Play.name = this.input.value();
            Play.index = playC;

            playC += 1;
            Play.updateCount(playC);
            Play.update();

            this.greet.html('hello ' + Play.name);
            this.greet.position((displayWidth/2) + 30,(displayHeight/4));
        });
    }
};