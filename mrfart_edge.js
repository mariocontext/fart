/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bent_man',
            type:'rect',
            rect:['93','83','auto','auto','auto','auto'],
            title:'Stick figure bent over',
            cursor:['pointer']
         },
         {
            id:'fart_ray',
            type:'rect',
            rect:['10','159','auto','auto','auto','auto']
         },
         {
            id:'cloud_farts_g3',
            type:'rect',
            rect:['25','159','auto','auto','auto','auto']
         },
         {
            id:'speak_fart_g',
            type:'rect',
            rect:['18px','248px','auto','auto','auto','auto']
         },
         {
            id:'fire_fart',
            type:'rect',
            rect:['2','230','auto','auto','auto','auto']
         },
         {
            id:'fartminis',
            type:'rect',
            rect:['14','112','auto','auto','auto','auto']
         },
         {
            id:'fart_whisper',
            type:'rect',
            rect:['22','201','auto','auto','auto','auto']
         },
         {
            id:'expr_happy2',
            type:'rect',
            rect:['247','113','auto','auto','auto','auto']
         },
         {
            id:'expr_side_neutral',
            type:'rect',
            rect:['255','107','auto','auto','auto','auto']
         },
         {
            id:'expr_surprised',
            type:'rect',
            rect:['214','92','auto','auto','auto','auto']
         },
         {
            id:'expr_anger',
            type:'rect',
            rect:['250','91','auto','auto','auto','auto']
         },
         {
            id:'expr_suffer',
            type:'rect',
            rect:['238','106','auto','auto','auto','auto']
         },
         {
            id:'expr_sad',
            type:'rect',
            rect:['222','95','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'fire_fart',
            symbolName:'fire_fart'
         },
         {
            id:'fart_whisper',
            symbolName:'fart_whisper'
         },
         {
            id:'expr_happy2',
            symbolName:'expr_happy'
         },
         {
            id:'fartminis',
            symbolName:'fartminis'
         },
         {
            id:'expr_sad',
            symbolName:'expr_sad'
         },
         {
            id:'expr_suffer',
            symbolName:'expr_suffer'
         },
         {
            id:'expr_side_neutral',
            symbolName:'expr_side_neutral'
         },
         {
            id:'expr_anger',
            symbolName:'expr_anger'
         },
         {
            id:'bent_man',
            symbolName:'bent_man'
         },
         {
            id:'speak_fart_g',
            symbolName:'speak_fart_g'
         },
         {
            id:'cloud_farts_g3',
            symbolName:'cloud_farts_g'
         },
         {
            id:'expr_surprised',
            symbolName:'expr_surprised'
         },
         {
            id:'fart_ray',
            symbolName:'fart_ray'
         }
         ]
      },
   states: {
      "Base State": {
         "${_fart_whisper}": [
            ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '24px'],
            ["style", "top", '209px']
         ],
         "${_fartminis}": [
            ["transform", "scaleX", '0.75'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.75']
         ],
         "${_cloud_farts_g3}": [
            ["style", "top", '149px'],
            ["style", "opacity", '0'],
            ["style", "left", '10px']
         ],
         "${_expr_anger}": [
            ["style", "opacity", '0']
         ],
         "${_fire_fart}": [
            ["style", "opacity", '0']
         ],
         "${_stage}": [
            ["style", "height", '480px'],
            ["color", "background-color", 'rgb(255,255,255)'],
            ["style", "width", '320px']
         ],
         "${_expr_happy2}": [
            ["style", "opacity", '1']
         ],
         "${_fart_ray}": [
            ["style", "opacity", '0']
         ],
         "${_expr_side_neutral}": [
            ["style", "opacity", '0']
         ],
         "${_bent_man}": [
            ["style", "cursor", 'pointer']
         ],
         "${_speak_fart_g}": [
            ["style", "top", '240px'],
            ["style", "opacity", '0'],
            ["style", "left", '10px']
         ],
         "${_expr_sad}": [
            ["style", "opacity", '0']
         ],
         "${_expr_suffer}": [
            ["style", "opacity", '0']
         ],
         "${_expr_surprised}": [
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3250,
         autoPlay: true,
         labels: {
            "fart_lbl_1": 13,
            "fart_lbl_2": 513,
            "fart_lbl_3": 1013,
            "fart_lbl_4": 1509,
            "fart_lbl_5": 2009,
            "fart_lbl_6": 2402
         },
         timeline: [
            { id: "eid458", tween: [ "style", "${_expr_happy2}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid510", tween: [ "style", "${_expr_happy2}", "opacity", '1', { fromValue: '1'}], position: 503, duration: 0, easing: "easeInQuad" },
            { id: "eid459", tween: [ "style", "${_expr_happy2}", "opacity", '0', { fromValue: '0'}], position: 513, duration: 0, easing: "easeInQuad" },
            { id: "eid502", tween: [ "style", "${_expr_suffer}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0, easing: "easeInQuad" },
            { id: "eid501", tween: [ "style", "${_expr_suffer}", "opacity", '1', { fromValue: '0'}], position: 2009, duration: 0, easing: "easeInQuad" },
            { id: "eid503", tween: [ "style", "${_expr_suffer}", "opacity", '1', { fromValue: '1'}], position: 2391, duration: 0, easing: "easeInQuad" },
            { id: "eid541", tween: [ "style", "${_expr_suffer}", "opacity", '0', { fromValue: '1'}], position: 2402, duration: 0, easing: "easeInQuad" },
            { id: "eid109", tween: [ "transform", "${_fartminis}", "scaleY", '1', { fromValue: '0.75'}], position: 2020, duration: 371, easing: "easeInQuad" },
            { id: "eid498", tween: [ "style", "${_expr_anger}", "opacity", '1', { fromValue: '0'}], position: 1509, duration: 0, easing: "easeInQuad" },
            { id: "eid497", tween: [ "style", "${_expr_anger}", "opacity", '0', { fromValue: '1'}], position: 2009, duration: 0, easing: "easeInQuad" },
            { id: "eid84", tween: [ "style", "${_fart_whisper}", "left", '24px', { fromValue: '24px'}], position: 2427, duration: 0 },
            { id: "eid509", tween: [ "style", "${_expr_sad}", "opacity", '0', { fromValue: '0'}], position: 2391, duration: 0, easing: "easeInQuad" },
            { id: "eid508", tween: [ "style", "${_expr_sad}", "opacity", '1', { fromValue: '0'}], position: 2402, duration: 0, easing: "easeInQuad" },
            { id: "eid72", tween: [ "transform", "${_fart_whisper}", "scaleX", '1.5', { fromValue: '1'}], position: 2427, duration: 407 },
            { id: "eid74", tween: [ "transform", "${_fart_whisper}", "scaleX", '1', { fromValue: '1.5'}], position: 2834, duration: 416 },
            { id: "eid31", tween: [ "style", "${_cloud_farts_g3}", "top", '149px', { fromValue: '149px'}], position: 500, duration: 0 },
            { id: "eid34", tween: [ "style", "${_cloud_farts_g3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 103 },
            { id: "eid35", tween: [ "style", "${_cloud_farts_g3}", "opacity", '0', { fromValue: '0.9981799721717834'}], position: 603, duration: 107 },
            { id: "eid36", tween: [ "style", "${_cloud_farts_g3}", "opacity", '1', { fromValue: '0.0021860001143068075'}], position: 710, duration: 135 },
            { id: "eid37", tween: [ "style", "${_cloud_farts_g3}", "opacity", '0', { fromValue: '1'}], position: 845, duration: 155 },
            { id: "eid40", tween: [ "style", "${_speak_fart_g}", "top", '240px', { fromValue: '240px'}], position: 1000, duration: 0 },
            { id: "eid42", tween: [ "style", "${_speak_fart_g}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 115 },
            { id: "eid48", tween: [ "style", "${_speak_fart_g}", "opacity", '0', { fromValue: '1'}], position: 1115, duration: 135 },
            { id: "eid49", tween: [ "style", "${_speak_fart_g}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 108 },
            { id: "eid50", tween: [ "style", "${_speak_fart_g}", "opacity", '0', { fromValue: '1'}], position: 1358, duration: 142 },
            { id: "eid23", tween: [ "style", "${_fart_ray}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
            { id: "eid26", tween: [ "style", "${_fart_ray}", "opacity", '0', { fromValue: '1'}], position: 125, duration: 125 },
            { id: "eid28", tween: [ "style", "${_fart_ray}", "opacity", '1', { fromValue: '0.000000'}], position: 250, duration: 103 },
            { id: "eid29", tween: [ "style", "${_fart_ray}", "opacity", '0', { fromValue: '1'}], position: 353, duration: 147 },
            { id: "eid85", tween: [ "style", "${_fart_whisper}", "top", '209px', { fromValue: '209px'}], position: 2427, duration: 0 },
            { id: "eid58", tween: [ "style", "${_fire_fart}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 107 },
            { id: "eid59", tween: [ "style", "${_fire_fart}", "opacity", '0', { fromValue: '1'}], position: 1607, duration: 143 },
            { id: "eid60", tween: [ "style", "${_fire_fart}", "opacity", '1', { fromValue: '0.000000'}], position: 1750, duration: 127 },
            { id: "eid61", tween: [ "style", "${_fire_fart}", "opacity", '0', { fromValue: '1'}], position: 1877, duration: 123 },
            { id: "eid38", tween: [ "style", "${_speak_fart_g}", "left", '10px', { fromValue: '10px'}], position: 1000, duration: 0 },
            { id: "eid30", tween: [ "style", "${_cloud_farts_g3}", "left", '10px', { fromValue: '10px'}], position: 500, duration: 0 },
            { id: "eid108", tween: [ "transform", "${_fartminis}", "scaleX", '1', { fromValue: '0.75'}], position: 2020, duration: 371, easing: "easeInQuad" },
            { id: "eid483", tween: [ "style", "${_expr_surprised}", "opacity", '0', { fromValue: '0'}], position: 1003, duration: 0, easing: "easeInQuad" },
            { id: "eid484", tween: [ "style", "${_expr_surprised}", "opacity", '1', { fromValue: '0'}], position: 1015, duration: 0, easing: "easeInQuad" },
            { id: "eid496", tween: [ "style", "${_expr_surprised}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0, easing: "easeInQuad" },
            { id: "eid493", tween: [ "style", "${_expr_surprised}", "opacity", '0', { fromValue: '0'}], position: 1509, duration: 0, easing: "easeInQuad" },
            { id: "eid68", tween: [ "style", "${_fart_whisper}", "opacity", '1', { fromValue: '0.000000'}], position: 2427, duration: 407 },
            { id: "eid69", tween: [ "style", "${_fart_whisper}", "opacity", '0', { fromValue: '1'}], position: 2834, duration: 416 },
            { id: "eid472", tween: [ "style", "${_expr_side_neutral}", "opacity", '0', { fromValue: '0'}], position: 503, duration: 0, easing: "easeInQuad" },
            { id: "eid470", tween: [ "style", "${_expr_side_neutral}", "opacity", '0.99', { fromValue: '0'}], position: 513, duration: 0, easing: "easeInQuad" },
            { id: "eid471", tween: [ "style", "${_expr_side_neutral}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 0, easing: "easeInQuad" },
            { id: "eid524", tween: [ "style", "${_expr_side_neutral}", "opacity", '0', { fromValue: '1'}], position: 1013, duration: 0, easing: "easeInQuad" },
            { id: "eid73", tween: [ "transform", "${_fart_whisper}", "scaleY", '1.5', { fromValue: '1'}], position: 2427, duration: 407 },
            { id: "eid75", tween: [ "transform", "${_fart_whisper}", "scaleY", '1', { fromValue: '1.5'}], position: 2834, duration: 416 },
            { id: "eid63", tween: [ "style", "${_fartminis}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 95 },
            { id: "eid64", tween: [ "style", "${_fartminis}", "opacity", '0', { fromValue: '1'}], position: 2095, duration: 108 },
            { id: "eid65", tween: [ "style", "${_fartminis}", "opacity", '1', { fromValue: '0.000000'}], position: 2203, duration: 118 },
            { id: "eid66", tween: [ "style", "${_fartminis}", "opacity", '0', { fromValue: '1'}], position: 2321, duration: 106 },
            { id: "eid80", tween: [ "style", "${_fart_whisper}", "-webkit-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid590", tween: [ "style", "${_fart_whisper}", "-moz-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid591", tween: [ "style", "${_fart_whisper}", "-ms-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid592", tween: [ "style", "${_fart_whisper}", "msTransformOrigin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid593", tween: [ "style", "${_fart_whisper}", "-o-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid174", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fart_ray}', [] ], ""], position: 0 },
            { id: "eid177", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_speak_fart_g}', [] ], ""], position: 0 },
            { id: "eid178", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_cloud_farts_g3}', [] ], ""], position: 0 },
            { id: "eid176", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fartminis}', [] ], ""], position: 0 },
            { id: "eid175", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fire_fart}', [] ], ""], position: 0 },
            { id: "eid179", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fart_whisper}', [] ], ""], position: 0 }         ]
      }
   }
},
"head_g": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'Group',
      tag: 'img',
      rect: ['0','0','90px','90px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Group.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '90px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"body_g": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      r: ['0','1','156','155','auto','auto'],
      id: 'Group-1',
      t: 'image',
      tag: 'img',
      f: ['rgba(0,0,0,0)','images/Group-1.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '155px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '156px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"arms_g": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      r: ['0','0','82','83','auto','auto'],
      id: 'Group-2',
      t: 'image',
      tag: 'img',
      f: ['rgba(0,0,0,0)','images/Group-2.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '83px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '82px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"leg_thigh_g": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      r: ['0','0','94','94','auto','auto'],
      id: 'Group-3',
      t: 'image',
      tag: 'img',
      f: ['rgba(0,0,0,0)','images/Group-3.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '94px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '94px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"leg_calf2_g": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      r: ['0','0','93','93','auto','auto'],
      id: 'Group-4',
      t: 'image',
      tag: 'img',
      f: ['rgba(0,0,0,0)','images/Group-4.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '93px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '93px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"foot_g": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      r: ['0','0','81','35','auto','auto'],
      id: 'Group-5',
      t: 'image',
      tag: 'img',
      f: ['rgba(0,0,0,0)','images/Group-5.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '35px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '81px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"fart_rays_g": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'fart_ray_basic',
      type: 'rect',
      rect: ['0px','1px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'fart_ray_basic',
      symbolName: 'fart_ray_basic'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '147px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '78px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1063,
         autoPlay: true,
         labels: {
            "first_fart_lbl": 0,
            "second_fart_lbl": 1063
         },
         timeline: [
         ]
      }
   }
},
"speak_fart_g": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'speak-fart',
      tag: 'img',
      rect: ['0','2','87','100','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/speak-fart.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '87px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"cloud_farts_g": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'cloud-farts',
      tag: 'img',
      rect: ['0','0','83','119','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud-farts.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '119px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '83px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"bent_man": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'head_g',
      type: 'rect',
      rect: ['114px','0px','0','0','auto','auto'],
      transform: []
   },
   {
      id: 'body_g',
      type: 'rect',
      rect: ['0px','45px','0','0','auto','auto'],
      transform: []
   },
   {
      id: 'arms_g',
      type: 'rect',
      rect: ['134px','94px','0','0','auto','auto'],
      transform: []
   },
   {
      id: 'leg_thigh_g',
      type: 'rect',
      rect: ['51px','170px','0','0','auto','auto'],
      transform: []
   },
   {
      id: 'leg_calf2_g',
      type: 'rect',
      rect: ['34px','234px','0','0','auto','auto'],
      transform: []
   },
   {
      id: 'foot_g',
      type: 'rect',
      rect: ['33px','295px','0','0','auto','auto'],
      transform: []
   }],
   symbolInstances: [
   {
      id: 'body_g',
      symbolName: 'body_g'
   },
   {
      id: 'leg_calf2_g',
      symbolName: 'leg_calf2_g'
   },
   {
      id: 'arms_g',
      symbolName: 'arms_g'
   },
   {
      id: 'leg_thigh_g',
      symbolName: 'leg_thigh_g'
   },
   {
      id: 'foot_g',
      symbolName: 'foot_g'
   },
   {
      id: 'head_g',
      symbolName: 'head_g'
   }   ]
   },
   states: {
      "Base State": {
         "${_arms_g}": [
            ["style", "left", '134px'],
            ["style", "top", '94px']
         ],
         "${_foot_g}": [
            ["style", "left", '33px'],
            ["style", "top", '295px']
         ],
         "${_leg_thigh_g}": [
            ["style", "left", '51px'],
            ["style", "top", '170px']
         ],
         "${symbolSelector}": [
            ["style", "height", '330px'],
            ["style", "width", '216px']
         ],
         "${_head_g}": [
            ["style", "left", '114px'],
            ["style", "top", '0px']
         ],
         "${_leg_calf2_g}": [
            ["style", "left", '34px'],
            ["style", "top", '234px']
         ],
         "${_body_g}": [
            ["style", "left", '0px'],
            ["style", "top", '45px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"fart_ray_basic": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','78','147','auto','auto'],
      id: 'fart-rays',
      fill: ['rgba(0,0,0,0)','images/fart-rays.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '147px'],
            ["style", "width", '78px']
         ],
         "${_fart-rays}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1025,
         autoPlay: true,
         timeline: [
            { id: "dg1", tween: [ "style", "${_fart-rays}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "dg2", tween: [ "style", "${_fart-rays}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 0 },
            { id: "dg3", tween: [ "style", "${_fart-rays}", "opacity", '0', { fromValue: '1'}], position: 515, duration: 0 },
            { id: "dg4", tween: [ "style", "${_fart-rays}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 0 },
            { id: "dg5", tween: [ "style", "${_fart-rays}", "opacity", '0', { fromValue: '1'}], position: 1025, duration: 0 }         ]
      }
   }
},
"fart_ray": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'fart-rays5',
      type: 'image',
      rect: ['26px','61px','78px','147px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fart-rays.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fart-rays5}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '147px'],
            ["style", "width", '78px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid21", tween: [ "style", "${_fart-rays5}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "style", "${_fart-rays5}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
      }
   }
},
"fire_fart": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],['-45']],
      id: 'fart-rays',
      type: 'image',
      rect: ['0px','35px','121px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fart-rays.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fart-rays}": [
            ["style", "top", '35px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '50px'],
            ["style", "left", '0px'],
            ["style", "width", '121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '121px'],
            ["style", "width", '121px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"fartminis": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],['136']],
      id: 'cloud-farts2Copy',
      type: 'image',
      rect: ['16px','7px','44px','64px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud-farts.png','0px','0px']
   },
   {
      transform: [[0,0],['59'],[],['0.594','0.594']],
      id: 'cloud-farts2',
      type: 'image',
      rect: ['7px','43px','44px','64px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud-farts.png','0px','0px']
   },
   {
      transform: [[0,0],['2']],
      id: 'cloud-farts2Copy2',
      type: 'image',
      rect: ['53px','66px','26px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cloud-farts.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cloud-farts2Copy}": [
            ["style", "top", '7px'],
            ["transform", "rotateZ", '136deg'],
            ["style", "height", '64px'],
            ["style", "left", '16px'],
            ["style", "width", '44px']
         ],
         "${_cloud-farts2}": [
            ["style", "top", '43px'],
            ["transform", "scaleY", '0.59379'],
            ["transform", "rotateZ", '59deg'],
            ["style", "height", '64px'],
            ["transform", "scaleX", '0.59379'],
            ["style", "left", '7px'],
            ["style", "width", '44px']
         ],
         "${_cloud-farts2Copy2}": [
            ["style", "top", '66px'],
            ["transform", "rotateZ", '2deg'],
            ["style", "height", '38px'],
            ["style", "left", '53px'],
            ["style", "width", '26px']
         ],
         "${symbolSelector}": [
            ["style", "height", '104px'],
            ["style", "width", '80px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"fart_whisper": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],['50']],
      id: 'speak-fart',
      type: 'image',
      rect: ['11px','7px','39px','45px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/speak-fart.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_speak-fart}": [
            ["style", "top", '7px'],
            ["transform", "rotateZ", '50deg'],
            ["style", "height", '45px'],
            ["style", "left", '11px'],
            ["style", "width", '39px']
         ],
         "${symbolSelector}": [
            ["style", "height", '59px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"eye": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'eye4',
      type: 'image',
      rect: ['9px','10px','16px','16px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/eye.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_eye4}": [
            ["style", "height", '16px'],
            ["style", "top", '10px'],
            ["style", "left", '9px'],
            ["style", "width", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '35px'],
            ["style", "width", '33px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"expr_happy": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'mouth_curved2',
      type: 'image',
      rect: ['0px','23px','39px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mouth_curved.png','0px','0px']
   },
   {
      id: 'eye7',
      type: 'rect',
      rect: ['20','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'eye7',
      symbolName: 'eye'
   }   ]
   },
   states: {
      "Base State": {
         "${_mouth_curved2}": [
            ["style", "left", '0px'],
            ["style", "top", '23px']
         ],
         "${symbolSelector}": [
            ["style", "height", '61px'],
            ["style", "width", '39px']
         ],
         "${_eye7}": [
            ["style", "top", '-1px'],
            ["style", "left", '15px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid463", tween: [ "style", "${_eye7}", "left", '15px', { fromValue: '15px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid462", tween: [ "style", "${_eye7}", "top", '-1px', { fromValue: '-1px'}], position: 0, duration: 0, easing: "easeInQuad" }         ]
      }
   }
},
"expr_side_neutral": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'eye8',
      type: 'rect',
      rect: ['19px','12px','auto','auto','auto','auto']
   },
   {
      id: 'mouth_flat',
      type: 'image',
      rect: ['0px','35px','43px','8px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mouth_flat.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'eye8',
      symbolName: 'eye'
   }   ]
   },
   states: {
      "Base State": {
         "${_eye8}": [
            ["style", "left", '4px'],
            ["style", "top", '0px']
         ],
         "${_mouth_flat}": [
            ["style", "left", '0px'],
            ["style", "top", '35px']
         ],
         "${symbolSelector}": [
            ["style", "height", '43px'],
            ["style", "width", '43px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 513,
         autoPlay: false,
         timeline: [
            { id: "eid468", tween: [ "style", "${_eye8}", "left", '4px', { fromValue: '4px'}], position: 513, duration: 0, easing: "easeInQuad" },
            { id: "eid469", tween: [ "style", "${_eye8}", "top", '0px', { fromValue: '0px'}], position: 513, duration: 0, easing: "easeInQuad" }         ]
      }
   }
},
"expr_surprised": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'eye10',
      type: 'rect',
      rect: ['63px','33px','auto','auto','auto','auto']
   },
   {
      id: 'eye10Copy',
      type: 'rect',
      rect: ['63px','33px','auto','auto','auto','auto']
   },
   {
      id: 'eye11',
      type: 'rect',
      rect: ['41px','44px','auto','auto','auto','auto']
   },
   {
      id: 'brow_left',
      type: 'image',
      rect: ['2px','1px','34px','17px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/brow_left.png','0px','0px']
   },
   {
      id: 'brow_right',
      type: 'image',
      rect: ['38px','0px','39px','17px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/brow_right.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'eye10',
      symbolName: 'eye'
   },
   {
      id: 'eye10Copy',
      symbolName: 'eye'
   },
   {
      id: 'eye11',
      symbolName: 'eye'
   }   ]
   },
   states: {
      "Base State": {
         "${_brow_right}": [
            ["style", "top", '0px'],
            ["style", "left", '38px']
         ],
         "${_eye10Copy}": [
            ["style", "top", '9px'],
            ["transform", "scaleX", '1.5'],
            ["transform", "scaleY", '1.5'],
            ["style", "left", '0px']
         ],
         "${_brow_left}": [
            ["style", "top", '1px'],
            ["style", "left", '2px']
         ],
         "${_eye10}": [
            ["style", "top", '9px'],
            ["transform", "scaleX", '1.5'],
            ["transform", "scaleY", '1.5'],
            ["style", "left", '41px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '77px']
         ],
         "${_eye11}": [
            ["style", "left", '20px'],
            ["style", "top", '37px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid477", tween: [ "style", "${_eye11}", "left", '20px', { fromValue: '20px'}], position: 1013, duration: 0, easing: "easeInQuad" },
            { id: "eid476", tween: [ "style", "${_eye10Copy}", "left", '0px', { fromValue: '0px'}], position: 1013, duration: 0, easing: "easeInQuad" },
            { id: "eid492", tween: [ "transform", "${_eye10}", "scaleY", '1.5', { fromValue: '1.5'}], position: 1500, duration: 0, easing: "easeInQuad" },
            { id: "eid491", tween: [ "transform", "${_eye10}", "scaleX", '1.5', { fromValue: '1.5'}], position: 1500, duration: 0, easing: "easeInQuad" },
            { id: "eid489", tween: [ "transform", "${_eye10Copy}", "scaleX", '1.5', { fromValue: '1.5'}], position: 1500, duration: 0, easing: "easeInQuad" },
            { id: "eid490", tween: [ "transform", "${_eye10Copy}", "scaleY", '1.5', { fromValue: '1.5'}], position: 1500, duration: 0, easing: "easeInQuad" },
            { id: "eid474", tween: [ "style", "${_eye10}", "top", '9px', { fromValue: '9px'}], position: 1013, duration: 0, easing: "easeInQuad" },
            { id: "eid478", tween: [ "style", "${_eye11}", "top", '37px', { fromValue: '37px'}], position: 1013, duration: 0, easing: "easeInQuad" },
            { id: "eid475", tween: [ "style", "${_eye10}", "left", '41px', { fromValue: '41px'}], position: 1013, duration: 0, easing: "easeInQuad" }         ]
      }
   }
},
"expr_anger": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'eye13',
      type: 'rect',
      rect: ['17px','22px','auto','auto','auto','auto']
   },
   {
      transform: [[0,0],['30']],
      id: 'mouth_flat2',
      type: 'image',
      rect: ['-1px','54px','43px','8px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mouth_flat.png','0px','0px']
   },
   {
      transform: [[0,0],['42']],
      id: 'brow_left2',
      type: 'image',
      rect: ['13px','9px','34px','17px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/brow_left.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'eye13',
      symbolName: 'eye'
   }   ]
   },
   states: {
      "Base State": {
         "${_mouth_flat2}": [
            ["style", "top", '54px'],
            ["style", "left", '-1px'],
            ["transform", "rotateZ", '30deg']
         ],
         "${_brow_left2}": [
            ["style", "top", '9px'],
            ["style", "left", '13px'],
            ["transform", "rotateZ", '42deg']
         ],
         "${_eye13}": [
            ["style", "top", '13px'],
            ["style", "left", '9px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '48px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1509,
         autoPlay: true,
         timeline: [
            { id: "eid495", tween: [ "style", "${_eye13}", "left", '9px', { fromValue: '9px'}], position: 1509, duration: 0, easing: "easeInQuad" },
            { id: "eid494", tween: [ "style", "${_eye13}", "top", '13px', { fromValue: '13px'}], position: 1509, duration: 0, easing: "easeInQuad" }         ]
      }
   }
},
"expr_suffer": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'eye14',
      type: 'rect',
      rect: ['29px','7px','auto','auto','auto','auto']
   },
   {
      id: 'brow_right3',
      type: 'image',
      rect: ['18px','0px','39px','17px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/brow_right.png','0px','0px']
   },
   {
      transform: [[0,0],['33']],
      id: 'grimace',
      type: 'image',
      rect: ['5px','30px','51px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/grimace.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'eye14',
      symbolName: 'eye'
   }   ]
   },
   states: {
      "Base State": {
         "${_eye14}": [
            ["style", "top", '4px'],
            ["style", "left", '19px']
         ],
         "${_brow_right3}": [
            ["style", "top", '0px'],
            ["style", "left", '18px']
         ],
         "${_grimace}": [
            ["style", "top", '30px'],
            ["style", "-webkit-transform-origin", [28.81,29.21], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [28.81,29.21],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [28.81,29.21],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [28.81,29.21],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [28.81,29.21],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '5px'],
            ["transform", "rotateZ", '33deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '67px'],
            ["style", "width", '57px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2009,
         autoPlay: false,
         timeline: [
            { id: "eid500", tween: [ "style", "${_eye14}", "left", '19px', { fromValue: '19px'}], position: 2009, duration: 0, easing: "easeInQuad" },
            { id: "eid499", tween: [ "style", "${_eye14}", "top", '4px', { fromValue: '4px'}], position: 2009, duration: 0, easing: "easeInQuad" }         ]
      }
   }
},
"expr_sad": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'eye15',
      type: 'rect',
      rect: ['45px','18px','auto','auto','auto','auto']
   },
   {
      id: 'eye16',
      type: 'rect',
      rect: ['5px','11px','auto','auto','auto','auto']
   },
   {
      transform: [[0,0],['124']],
      id: 'mouth_curved3',
      type: 'image',
      rect: ['18px','35px','39px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mouth_curved.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'eye15',
      symbolName: 'eye'
   },
   {
      id: 'eye16',
      symbolName: 'eye'
   }   ]
   },
   states: {
      "Base State": {
         "${_eye16}": [
            ["style", "left", '0px'],
            ["style", "top", '9px']
         ],
         "${_mouth_curved3}": [
            ["style", "top", '35px'],
            ["style", "left", '18px'],
            ["transform", "rotateZ", '124deg']
         ],
         "${_eye15}": [
            ["style", "left", '28px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '81px'],
            ["style", "width", '64px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2402,
         autoPlay: true,
         timeline: [
            { id: "eid504", tween: [ "style", "${_eye15}", "left", '28px', { fromValue: '28px'}], position: 2402, duration: 0, easing: "easeInQuad" },
            { id: "eid506", tween: [ "style", "${_eye16}", "left", '0px', { fromValue: '0px'}], position: 2402, duration: 0, easing: "easeInQuad" },
            { id: "eid505", tween: [ "style", "${_eye15}", "top", '0px', { fromValue: '0px'}], position: 2402, duration: 0, easing: "easeInQuad" },
            { id: "eid507", tween: [ "style", "${_eye16}", "top", '9px', { fromValue: '9px'}], position: 2402, duration: 0, easing: "easeInQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1366769845110");
