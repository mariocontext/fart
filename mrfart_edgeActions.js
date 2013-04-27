
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
		(function(symbolName){Symbol.bindElementAction(compId, symbolName, "${_bent_man}", "touchstart mousedown", function(sym,e){
		
			var fartObject = sym.getSymbol("fart_rays_g").getSymbol("fart_ray_basic");
     
          
				if(fartObject.isPlaying()){

				fartObject.stop(); 
				
				} else	{

				fartObject.play();
				
				var pathToStage = "sym.getComposition().getStage().";
				
				var pathToAudio = sym.audioName();
				
				console.log(pathToAudio);
				
				sym.getComposition().getStage().pathToAudio.play();
				
				
				}
         

		});

		//Edge binding end
		Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym,e){

		sym.audio01 = new buzz.sound("media/fart_01",  {formats:["ogg","mp3"]});
		sym.audio02 = new buzz.sound("media/fart2_01", {formats: [ "ogg", "mp3" ]});
      sym.audio03 = new buzz.sound("media/fart3_01", {formats: [ "ogg", "mp3" ]});
      sym.audio04 = new buzz.sound("media/fart4_01", {formats: [ "ogg", "mp3" ]});
      sym.audio05 = new buzz.sound("media/fart5_01", {formats: [ "ogg", "mp3" ]});
     	sym.audio06 = new buzz.sound("media/fart6_01", {formats: [ "ogg", "mp3" ]});
     	
     	// Returns a random integer between min and max
         // Using Math.round() will give you a non-uniform distribution!
         sym.getRandomInt = function(min, max) {
           return Math.floor(Math.random() * (max - min + 1)) + min;
         }
         
         sym.audioName = function() {
         
         	var audioPath = "audio0" + sym.getRandomInt(1,6);
         	return audioPath;
         
         }


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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1025, function(sym, e) {
         // insert code here
         	
      });
      //Edge binding end

   })("fart_rays_g");
   //Edge symbol end:'fart_rays_g'

})(jQuery, AdobeEdge, "EDGE-1366769845110");


