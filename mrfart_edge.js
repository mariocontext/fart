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
         },
         {
            id:'touch_anim_g',
            type:'rect',
            rect:['54','106','auto','auto','auto','auto'],
            cursor:['pointer'],
            transform:[]
         },
         {
            id:'sound_button_g',
            type:'rect',
            rect:['260','428','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'advert_one_g',
            type:'rect',
            rect:['-332px','0','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'advert_one_g',
            symbolName:'advert_one_g'
         },
         {
            id:'fire_fart',
            symbolName:'fire_fart'
         },
         {
            id:'sound_button_g',
            symbolName:'sound_button_g'
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
            id:'fart_ray',
            symbolName:'fart_ray'
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
            id:'touch_anim_g',
            symbolName:'touch_anim_g'
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
         "${_fire_fart}": [
            ["style", "opacity", '0']
         ],
         "${_stage}": [
            ["color", "background-color", 'rgb(255,255,255)'],
            ["style", "height", '480px'],
            ["style", "width", '320px']
         ],
         "${_fartminis}": [
            ["transform", "scaleX", '0.75'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.75']
         ],
         "${_expr_side_neutral}": [
            ["style", "opacity", '0']
         ],
         "${_expr_suffer}": [
            ["style", "opacity", '0']
         ],
         "${_expr_surprised}": [
            ["style", "opacity", '0']
         ],
         "${_advert_one_g}": [
            ["style", "left", '-332px']
         ],
         "${_cloud_farts_g3}": [
            ["style", "top", '149px'],
            ["style", "opacity", '0'],
            ["style", "left", '10px']
         ],
         "${_expr_anger}": [
            ["style", "opacity", '0']
         ],
         "${_speak_fart_g}": [
            ["style", "top", '240px'],
            ["style", "opacity", '0'],
            ["style", "left", '10px']
         ],
         "${_sound_button_g}": [
            ["style", "cursor", 'pointer']
         ],
         "${_fart_ray}": [
            ["style", "opacity", '0']
         ],
         "${_bent_man}": [
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["style", "overflow", 'hidden']
         ],
         "${_expr_sad}": [
            ["style", "opacity", '0']
         ],
         "${_expr_happy2}": [
            ["style", "opacity", '1']
         ],
         "${_touch_anim_g}": [
            ["style", "top", '212px'],
            ["style", "opacity", '1'],
            ["style", "left", '153px'],
            ["style", "cursor", 'pointer']
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
            { id: "eid72", tween: [ "transform", "${_fart_whisper}", "scaleX", '1.5', { fromValue: '1'}], position: 2427, duration: 407 },
            { id: "eid74", tween: [ "transform", "${_fart_whisper}", "scaleX", '1', { fromValue: '1.5'}], position: 2834, duration: 416 },
            { id: "eid63", tween: [ "style", "${_fartminis}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 95 },
            { id: "eid64", tween: [ "style", "${_fartminis}", "opacity", '0', { fromValue: '1'}], position: 2095, duration: 108 },
            { id: "eid65", tween: [ "style", "${_fartminis}", "opacity", '1', { fromValue: '0.000000'}], position: 2203, duration: 118 },
            { id: "eid66", tween: [ "style", "${_fartminis}", "opacity", '0', { fromValue: '1'}], position: 2321, duration: 106 },
            { id: "eid109", tween: [ "transform", "${_fartminis}", "scaleY", '1', { fromValue: '0.75'}], position: 2020, duration: 371, easing: "easeInQuad" },
            { id: "eid958", tween: [ "style", "${_touch_anim_g}", "left", '153px', { fromValue: '153px'}], position: 0, duration: 0 },
            { id: "eid498", tween: [ "style", "${_expr_anger}", "opacity", '1', { fromValue: '0'}], position: 1509, duration: 0, easing: "easeInQuad" },
            { id: "eid497", tween: [ "style", "${_expr_anger}", "opacity", '0', { fromValue: '1'}], position: 2009, duration: 0, easing: "easeInQuad" },
            { id: "eid84", tween: [ "style", "${_fart_whisper}", "left", '24px', { fromValue: '24px'}], position: 2427, duration: 0 },
            { id: "eid509", tween: [ "style", "${_expr_sad}", "opacity", '0', { fromValue: '0'}], position: 2391, duration: 0, easing: "easeInQuad" },
            { id: "eid508", tween: [ "style", "${_expr_sad}", "opacity", '1', { fromValue: '0'}], position: 2402, duration: 0, easing: "easeInQuad" },
            { id: "eid997", tween: [ "style", "${_touch_anim_g}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid999", tween: [ "style", "${_touch_anim_g}", "opacity", '0', { fromValue: '1'}], position: 13, duration: 0 },
            { id: "eid31", tween: [ "style", "${_cloud_farts_g3}", "top", '149px', { fromValue: '149px'}], position: 500, duration: 0 },
            { id: "eid34", tween: [ "style", "${_cloud_farts_g3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 103 },
            { id: "eid35", tween: [ "style", "${_cloud_farts_g3}", "opacity", '0', { fromValue: '0.9981799721717834'}], position: 603, duration: 107 },
            { id: "eid36", tween: [ "style", "${_cloud_farts_g3}", "opacity", '1', { fromValue: '0.0021860001143068075'}], position: 710, duration: 135 },
            { id: "eid37", tween: [ "style", "${_cloud_farts_g3}", "opacity", '0', { fromValue: '1'}], position: 845, duration: 155 },
            { id: "eid40", tween: [ "style", "${_speak_fart_g}", "top", '240px', { fromValue: '240px'}], position: 1000, duration: 0 },
            { id: "eid58", tween: [ "style", "${_fire_fart}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 107 },
            { id: "eid59", tween: [ "style", "${_fire_fart}", "opacity", '0', { fromValue: '1'}], position: 1607, duration: 143 },
            { id: "eid60", tween: [ "style", "${_fire_fart}", "opacity", '1', { fromValue: '0.000000'}], position: 1750, duration: 127 },
            { id: "eid61", tween: [ "style", "${_fire_fart}", "opacity", '0', { fromValue: '1'}], position: 1877, duration: 123 },
            { id: "eid23", tween: [ "style", "${_fart_ray}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
            { id: "eid26", tween: [ "style", "${_fart_ray}", "opacity", '0', { fromValue: '1'}], position: 125, duration: 125 },
            { id: "eid28", tween: [ "style", "${_fart_ray}", "opacity", '1', { fromValue: '0.000000'}], position: 250, duration: 103 },
            { id: "eid29", tween: [ "style", "${_fart_ray}", "opacity", '0', { fromValue: '1'}], position: 353, duration: 147 },
            { id: "eid85", tween: [ "style", "${_fart_whisper}", "top", '209px', { fromValue: '209px'}], position: 2427, duration: 0 },
            { id: "eid42", tween: [ "style", "${_speak_fart_g}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 115 },
            { id: "eid48", tween: [ "style", "${_speak_fart_g}", "opacity", '0', { fromValue: '1'}], position: 1115, duration: 135 },
            { id: "eid49", tween: [ "style", "${_speak_fart_g}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 108 },
            { id: "eid50", tween: [ "style", "${_speak_fart_g}", "opacity", '0', { fromValue: '1'}], position: 1358, duration: 142 },
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
            { id: "eid959", tween: [ "style", "${_touch_anim_g}", "top", '212px', { fromValue: '212px'}], position: 0, duration: 0 },
            { id: "eid80", tween: [ "style", "${_fart_whisper}", "-webkit-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid1561", tween: [ "style", "${_fart_whisper}", "-moz-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid1562", tween: [ "style", "${_fart_whisper}", "-ms-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid1563", tween: [ "style", "${_fart_whisper}", "msTransformOrigin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid1564", tween: [ "style", "${_fart_whisper}", "-o-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid174", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fart_ray}', [] ], ""], position: 0 },
            { id: "eid176", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fartminis}', [] ], ""], position: 0 },
            { id: "eid179", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fart_whisper}', [] ], ""], position: 0 },
            { id: "eid175", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fire_fart}', [] ], ""], position: 0 },
            { id: "eid178", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_cloud_farts_g3}', [] ], ""], position: 0 },
            { id: "eid177", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_speak_fart_g}', [] ], ""], position: 0 },
            { id: "eid1016", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_touch_anim_g}', [] ], ""], position: 0 }         ]
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
      rect: ['0','0','90px','90px','auto','auto'],
      id: 'Group',
      fill: ['rgba(0,0,0,0)','images/Group.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '90px'],
            ["style", "overflow", 'hidden']
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
      f: ['rgba(0,0,0,0)','images/Group-1.png'],
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '155px'],
            ["style", "width", '156px'],
            ["style", "overflow", 'hidden']
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
      f: ['rgba(0,0,0,0)','images/Group-2.png'],
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '83px'],
            ["style", "width", '82px'],
            ["style", "overflow", 'hidden']
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
      f: ['rgba(0,0,0,0)','images/Group-3.png'],
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '94px'],
            ["style", "width", '94px'],
            ["style", "overflow", 'hidden']
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
      f: ['rgba(0,0,0,0)','images/Group-4.png'],
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '93px'],
            ["style", "width", '93px'],
            ["style", "overflow", 'hidden']
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
      f: ['rgba(0,0,0,0)','images/Group-5.png'],
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '35px'],
            ["style", "width", '81px'],
            ["style", "overflow", 'hidden']
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
            ["style", "width", '78px'],
            ["style", "overflow", 'hidden']
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
      rect: ['0','2','87','100','auto','auto'],
      id: 'speak-fart',
      fill: ['rgba(0,0,0,0)','images/speak-fart.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '87px'],
            ["style", "overflow", 'hidden']
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
      rect: ['0','0','83','119','auto','auto'],
      id: 'cloud-farts',
      fill: ['rgba(0,0,0,0)','images/cloud-farts.png'],
      type: 'image',
      tag: 'img'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '119px'],
            ["style", "width", '83px'],
            ["style", "overflow", 'hidden']
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
      type: 'image',
      id: 'fart-rays',
      tag: 'img',
      rect: ['0px','0px','78','147','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fart-rays.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fart-rays}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
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
      type: 'image',
      id: 'fart-rays',
      rect: ['0px','35px','121px','50px','auto','auto'],
      transform: [[0,0],['-45']],
      fill: ['rgba(0,0,0,0)','images/fart-rays.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '121px'],
            ["style", "width", '121px']
         ],
         "${_fart-rays}": [
            ["style", "top", '35px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '50px'],
            ["style", "left", '0px'],
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
      type: 'image',
      id: 'cloud-farts2Copy',
      rect: ['16px','7px','44px','64px','auto','auto'],
      transform: [[0,0],['136']],
      fill: ['rgba(0,0,0,0)','images/cloud-farts.png','0px','0px']
   },
   {
      type: 'image',
      id: 'cloud-farts2',
      rect: ['7px','43px','44px','64px','auto','auto'],
      transform: [[0,0],['59'],[],['0.594','0.594']],
      fill: ['rgba(0,0,0,0)','images/cloud-farts.png','0px','0px']
   },
   {
      type: 'image',
      id: 'cloud-farts2Copy2',
      rect: ['53px','66px','26px','38px','auto','auto'],
      transform: [[0,0],['2']],
      fill: ['rgba(0,0,0,0)','images/cloud-farts.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '104px'],
            ["style", "width", '80px']
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
         "${_cloud-farts2Copy}": [
            ["style", "top", '7px'],
            ["transform", "rotateZ", '136deg'],
            ["style", "height", '64px'],
            ["style", "left", '16px'],
            ["style", "width", '44px']
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
      type: 'image',
      id: 'speak-fart',
      rect: ['11px','7px','39px','45px','auto','auto'],
      transform: [[0,0],['50']],
      fill: ['rgba(0,0,0,0)','images/speak-fart.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '59px'],
            ["style", "width", '60px']
         ],
         "${_speak-fart}": [
            ["style", "top", '7px'],
            ["transform", "rotateZ", '50deg'],
            ["style", "height", '45px'],
            ["style", "left", '11px'],
            ["style", "width", '39px']
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
         "${symbolSelector}": [
            ["style", "height", '35px'],
            ["style", "width", '33px']
         ],
         "${_eye4}": [
            ["style", "top", '10px'],
            ["style", "height", '16px'],
            ["style", "left", '9px'],
            ["style", "width", '16px']
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
         "${_eye7}": [
            ["style", "top", '-1px'],
            ["style", "left", '15px']
         ],
         "${symbolSelector}": [
            ["style", "height", '61px'],
            ["style", "width", '39px']
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
         "${symbolSelector}": [
            ["style", "height", '43px'],
            ["style", "width", '43px']
         ],
         "${_mouth_flat}": [
            ["style", "left", '0px'],
            ["style", "top", '35px']
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
            ["transform", "scaleX", '1.5'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1.5'],
            ["style", "top", '9px']
         ],
         "${_brow_left}": [
            ["style", "top", '1px'],
            ["style", "left", '2px']
         ],
         "${_eye10}": [
            ["transform", "scaleX", '1.5'],
            ["style", "left", '41px'],
            ["transform", "scaleY", '1.5'],
            ["style", "top", '9px']
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
      type: 'image',
      id: 'mouth_flat2',
      rect: ['-1px','54px','43px','8px','auto','auto'],
      transform: [[0,0],['30']],
      fill: ['rgba(0,0,0,0)','images/mouth_flat.png','0px','0px']
   },
   {
      type: 'image',
      id: 'brow_left2',
      rect: ['13px','9px','34px','17px','auto','auto'],
      transform: [[0,0],['42']],
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
      type: 'image',
      id: 'grimace',
      rect: ['5px','30px','51px','19px','auto','auto'],
      transform: [[0,0],['33']],
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
         "${symbolSelector}": [
            ["style", "height", '67px'],
            ["style", "width", '57px']
         ],
         "${_grimace}": [
            ["style", "-webkit-transform-origin", [28.81,29.21], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [28.81,29.21],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [28.81,29.21],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [28.81,29.21],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [28.81,29.21],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '30px'],
            ["style", "left", '5px'],
            ["transform", "rotateZ", '33deg']
         ],
         "${_brow_right3}": [
            ["style", "top", '0px'],
            ["style", "left", '18px']
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
      type: 'image',
      id: 'mouth_curved3',
      rect: ['18px','35px','39px','38px','auto','auto'],
      transform: [[0,0],['124']],
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
         "${_mouth_curved3}": [
            ["style", "top", '35px'],
            ["style", "left", '18px'],
            ["transform", "rotateZ", '124deg']
         ],
         "${_eye16}": [
            ["style", "left", '0px'],
            ["style", "top", '9px']
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
            { id: "eid507", tween: [ "style", "${_eye16}", "top", '9px', { fromValue: '9px'}], position: 2402, duration: 0, easing: "easeInQuad" },
            { id: "eid505", tween: [ "style", "${_eye15}", "top", '0px', { fromValue: '0px'}], position: 2402, duration: 0, easing: "easeInQuad" }         ]
      }
   }
},
"touch_anim_g": {
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
      id: 'touch_anim_circ_g',
      type: 'rect',
      rect: ['-41','-35','auto','auto','auto','auto']
   },
   {
      id: 'touch-anim',
      type: 'image',
      rect: ['0px','0px','42px','54px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/touch-anim.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'touch_anim_circ_g',
      symbolName: 'touch_anim_circ_g'
   }   ]
   },
   states: {
      "Base State": {
         "${_touch-anim}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_touch_anim_circ_g}": [
            ["transform", "scaleX", '0.1'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.1']
         ],
         "${symbolSelector}": [
            ["style", "height", '54px'],
            ["style", "width", '42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: false,
         timeline: [
            { id: "eid1079", tween: [ "transform", "${_touch-anim}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid960", tween: [ "style", "${_touch-anim}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid961", tween: [ "style", "${_touch-anim}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid977", tween: [ "transform", "${_touch_anim_circ_g}", "scaleY", '1', { fromValue: '0.1'}], position: 10, duration: 1477 },
            { id: "eid983", tween: [ "transform", "${_touch_anim_circ_g}", "scaleY", '0.1', { fromValue: '1'}], position: 1487, duration: 1513 },
            { id: "eid975", tween: [ "transform", "${_touch_anim_circ_g}", "scaleX", '1', { fromValue: '0.1'}], position: 10, duration: 1477 },
            { id: "eid982", tween: [ "transform", "${_touch_anim_circ_g}", "scaleX", '0.1', { fromValue: '1'}], position: 1487, duration: 1513 },
            { id: "eid985", tween: [ "style", "${_touch_anim_circ_g}", "opacity", '0.50051930546761', { fromValue: '0'}], position: 10, duration: 1471 },
            { id: "eid986", tween: [ "style", "${_touch_anim_circ_g}", "opacity", '0', { fromValue: '0.5005189776420593'}], position: 1481, duration: 1519 },
            { id: "eid1037", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_touch_anim_circ_g}', [] ], ""], position: 0 }         ]
      }
   }
},
"touch_anim_circ_g": {
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
      rect: ['0px','0px','125px','125px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '125px'],
            ["style", "width", '125px']
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
"advert_one_g": {
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
      id: 'advert_one',
      type: 'image',
      rect: ['0px','0px','320px','480px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/advert_one.png','0px','0px']
   },
   {
      id: 'no_button_g',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['339','439','auto','auto','auto','auto']
   },
   {
      id: 'visit_button_g',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['491','439','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'no_button_g',
      symbolName: 'no_button_g'
   },
   {
      id: 'visit_button_g',
      symbolName: 'visit_button_g'
   }   ]
   },
   states: {
      "Base State": {
         "${_visit_button_g}": [
            ["style", "left", '160px'],
            ["style", "cursor", 'pointer']
         ],
         "${_no_button_g}": [
            ["style", "left", '11px'],
            ["style", "cursor", 'pointer']
         ],
         "${_advert_one}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '480px'],
            ["style", "width", '320px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         timeline: [
            { id: "eid1219", tween: [ "style", "${_advert_one}", "left", '331px', { fromValue: '0px'}], position: 0, duration: 250 },
            { id: "eid1227", tween: [ "style", "${_no_button_g}", "left", '339px', { fromValue: '11px'}], position: 0, duration: 250 },
            { id: "eid1221", tween: [ "style", "${_advert_one}", "top", '0px', { fromValue: '0px'}], position: 250, duration: 0 },
            { id: "eid1225", tween: [ "style", "${_visit_button_g}", "left", '491px', { fromValue: '160px'}], position: 0, duration: 250 }         ]
      }
   }
},
"no_button_g": {
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
      id: 'Group',
      type: 'group',
      rect: ['0px','0px','135','33','auto','auto'],
      c: [
      {
         rect: ['0px','0px','135px','33px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(81,81,81,1.00)']
      },
      {
         font: ['Arial, Helvetica, sans-serif',21,'rgba(255,255,255,1.00)','normal','none',''],
         id: 'Text',
         text: 'No Thanks',
         type: 'text',
         rect: ['13px','5px','109px','24px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Group}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["style", "height", '33px'],
            ["color", "background-color", 'rgba(81,81,81,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '135px']
         ],
         "${_Text}": [
            ["style", "top", '5px'],
            ["style", "font-size", '21px'],
            ["style", "height", '24px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '13px'],
            ["style", "width", '109px']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '135px']
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
"visit_button_g": {
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
      id: 'Group2',
      type: 'group',
      rect: ['0px','0px','144','33','auto','auto'],
      c: [
      {
         rect: ['0px','0px','144px','33px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(81,81,81,1)']
      },
      {
         font: ['Arial, Helvetica, sans-serif',21,'rgba(255,255,255,1)','normal','none','normal'],
         type: 'text',
         id: 'Text2',
         text: 'Visit Site',
         align: 'left',
         rect: ['29px','6px','86px','19px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Group2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text2}": [
            ["style", "height", '19px'],
            ["style", "top", '6px'],
            ["style", "left", '29px'],
            ["style", "width", '86px']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '144px']
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
"sound_button_g": {
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
      id: 'mute_sound_g',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'unmute_sound_g',
      type: 'rect',
      rect: ['68','0','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'unmute_sound_g',
      symbolName: 'unmute_sound_g'
   },
   {
      id: 'mute_sound_g',
      symbolName: 'mute_sound_g'
   }   ]
   },
   states: {
      "Base State": {
         "${_mute_sound_g}": [
            ["style", "left", '0px']
         ],
         "${_unmute_sound_g}": [
            ["style", "left", '70px']
         ],
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '51px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9,
         autoPlay: false,
         timeline: [
            { id: "eid1293", tween: [ "style", "${_unmute_sound_g}", "left", '70px', { fromValue: '70px'}], position: 0, duration: 0 },
            { id: "eid1295", tween: [ "style", "${_unmute_sound_g}", "left", '0px', { fromValue: '70px'}], position: 9, duration: 0 },
            { id: "eid1294", tween: [ "style", "${_mute_sound_g}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1296", tween: [ "style", "${_mute_sound_g}", "left", '70px', { fromValue: '0px'}], position: 9, duration: 0 }         ]
      }
   }
},
"mute_sound_g": {
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
      id: 'mute_sound',
      type: 'image',
      rect: ['0px','0px','51px','47px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mute_sound.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '51px']
         ],
         "${_mute_sound}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
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
            { id: "eid1292", tween: [ "style", "${_mute_sound}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
      }
   }
},
"unmute_sound_g": {
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
      id: 'unmute_sound2',
      type: 'image',
      rect: ['0px','0px','51px','47px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/unmute_sound.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '51px']
         ],
         "${_unmute_sound2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
