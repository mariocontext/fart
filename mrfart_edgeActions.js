
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId, symbolName, "${_bent_man}", "touchstart mousedown", function(sym,e){var fartObject=sym.getSymbol("fart_rays_g");if(fartObject.isPlaying()){fartObject.stop();}
else{fartObject.play();sym.audio01.play();}});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym,e){sym.audio01=new buzz.sound("media/fart_01",{formats:["ogg","mp3"]});});
//Edge binding end
})("stage");
   //Edge symbol end:'stage'

//Edge symbol: 'fart_rays_g'
(function(symbolName){})("fart_rays_g");
   //Edge symbol end:'fart_rays_g'

})(jQuery, AdobeEdge, "EDGE-1366769845110");