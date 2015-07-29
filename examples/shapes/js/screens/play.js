game.PlayScreen = me.ScreenObject.extend({
    /** 
     *  action to perform on state change
     */
    onResetEvent: function() {  
        // clear the background
        me.game.world.addChild(new me.ColorLayer("background", "#5E3F66", 0), 0);
        
        // add a few shapes
        
        // physic-editor
        me.game.world.addChild(new game.Circle(250, 200, {width: 50, height: 50}), 1);
        me.game.world.addChild(new game.Poly(50, 75, {width: 200, height: 200, sprite:"hamburger"}), 1);
        me.game.world.addChild(new game.Poly(50, 200, {width: 200, height: 200, sprite:"hotdog"}), 1);
        me.game.world.addChild(new game.Poly(50, 350, {width: 200, height: 200, sprite:"icecream"}), 1);
        me.game.world.addChild(new game.Poly(450, 100, {width: 200, height: 200, sprite:"icecream2"}), 1);
        me.game.world.addChild(new game.Poly(350, 100, {width: 200, height: 200, sprite:"icecream3"}), 1);
        
        // physic-body-editor
        me.game.world.addChild(new game.Poly2(375, 425, {width: 300, height: 300, sprite:"test02"}), 1);
        me.game.world.addChild(new game.Poly2(650, 550, {width: 256, height: 256, sprite:"test01"}), 1);
        me.game.world.addChild(new game.Poly2(650, 250, {width: 256, height: 256, sprite:"test03"}), 1);
    }
});
