
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
		(function(symbolName){
		
		var rootSiteUrlPath = "http://expr.io/media/";
		
		Symbol.bindElementAction(compId, symbolName, "${_bent_man}", "click", function(sym,e){
		
		//e.preventDefault(); used when combined touchstart and mousedown - though a problem that hinders scrolling
		sym.gotoAnim();

		});


		//Edge binding end
		Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym,e){
		

		sym.audio01 = new buzz.sound(rootSiteUrlPath + "fart_01", {formats: ["ogg","mp3"]});
		sym.audio02 = new buzz.sound(rootSiteUrlPath + "fart2_01", {formats: [ "ogg", "mp3" ]});
      sym.audio03 = new buzz.sound(rootSiteUrlPath + "fart3_01", {formats: [ "ogg", "mp3" ]});
      sym.audio04 = new buzz.sound(rootSiteUrlPath + "fart4_01", {formats: [ "ogg", "mp3" ]});
      sym.audio05 = new buzz.sound(rootSiteUrlPath + "fart5_01", {formats: [ "ogg", "mp3" ]});
     	sym.audio06 = new buzz.sound(rootSiteUrlPath + "fart6_01", {formats: [ "ogg", "mp3" ]});
     	
     	// Returns a random integer between min and max
         // Using Math.round() will give you a non-uniform distribution!
         sym.getRandomInt = function(min, max) {
           return Math.floor(Math.random() * (max - min + 1)) + min;
         }
         
     
     //generate random label reference
         
         sym.labelName = function() {
         
         	var labelPath = "fart_lbl_" + sym.getRandomInt(1,6);
         	return labelPath;
         
         }
         
     	// general randomized click anim
     	
     	sym.gotoAnim = function() {
     	
     		var fartObject = sym.getComposition().getStage();
			var myLabel = sym.labelName();
          
         console.log(myLabel);
         fartObject.play(myLabel);	
     	
     	}


		

		});
		//Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().audio01.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 513, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().audio02.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1013, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().audio03.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2391, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1509, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().audio04.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2009, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().audio06.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2402, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().audio05.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();
         sym.getComposition().getStage().getSymbol("touch_anim_g").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_touch_anim_g}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.gotoAnim();

      });
      //Edge binding end

		})("stage");
   //Edge symbol end:'stage'


   //=========================================================
   
   //Edge symbol: 'fart_ray_basic'
   (function(symbolName) {   
   
   })("fart_ray_basic");
   //Edge symbol end:'fart_ray_basic'

   //=========================================================
   
   //Edge symbol: 'fart_rays_g'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
				
				sym.getComposition().getStage().audio01.play();         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1020, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("fart_rays_g");
   //Edge symbol end:'fart_rays_g'

   //=========================================================
   
   //Edge symbol: 'fart_ray'
   (function(symbolName) {   
   
   })("fart_ray");
   //Edge symbol end:'fart_ray'

   //=========================================================
   
   //Edge symbol: 'cloud_farts_g'
   (function(symbolName) {   
   
   })("cloud_farts_g");
   //Edge symbol end:'cloud_farts_g'

   //=========================================================
   
   //Edge symbol: 'fire_fart'
   (function(symbolName) {   
   
   })("fire_fart");
   //Edge symbol end:'fire_fart'

   //=========================================================
   
   //Edge symbol: 'fartminis'
   (function(symbolName) {   
   
   })("fartminis");
   //Edge symbol end:'fartminis'

   //=========================================================
   
   //Edge symbol: 'fart_whisper'
   (function(symbolName) {   
   
   })("fart_whisper");
   //Edge symbol end:'fart_whisper'

   //=========================================================
   
   //Edge symbol: 'eye'
   (function(symbolName) {   
   
   })("eye");
   //Edge symbol end:'eye'

   //=========================================================
   
   //Edge symbol: 'expr_happy'
   (function(symbolName) {   
   
   })("expr_happy");
   //Edge symbol end:'expr_happy'

   //=========================================================
   
   //Edge symbol: 'expr_side_neutral'
   (function(symbolName) {   
   
   })("expr_side_neutral");
   //Edge symbol end:'expr_side_neutral'

   //=========================================================
   
   //Edge symbol: 'expr_surprised'
   (function(symbolName) {   
   
   })("expr_surprised");
   //Edge symbol end:'expr_surprised'

   //=========================================================
   
   //Edge symbol: 'expr_anger'
   (function(symbolName) {   
   
   })("expr_anger");
   //Edge symbol end:'expr_anger'

   //=========================================================
   
   //Edge symbol: 'expr_suffer'
   (function(symbolName) {   
   
   })("expr_suffer");
   //Edge symbol end:'expr_suffer'

   //=========================================================
   
   //Edge symbol: 'expr_sad'
   (function(symbolName) {   
   
   })("expr_sad");
   //Edge symbol end:'expr_sad'

   //=========================================================
   
   //Edge symbol: 'touch_anim_g'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("touch_anim_g");
   //Edge symbol end:'touch_anim_g'

   //=========================================================
   
   //Edge symbol: 'touch_anim_circ_g'
   (function(symbolName) {   
   
   })("touch_anim_circ_g");
   //Edge symbol end:'touch_anim_circ_g'

})(jQuery, AdobeEdge, "EDGE-1366769845110");


