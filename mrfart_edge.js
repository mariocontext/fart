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
         }],
         symbolInstances: [
         {
            id:'fart_ray',
            symbolName:'fart_ray'
         },
         {
            id:'fart_whisper',
            symbolName:'fart_whisper'
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
            id:'fartminis',
            symbolName:'fartminis'
         },
         {
            id:'fire_fart',
            symbolName:'fire_fart'
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
         "${_cloud_farts_g3}": [
            ["style", "top", '149px'],
            ["style", "opacity", '0'],
            ["style", "left", '10px']
         ],
         "${_speak_fart_g}": [
            ["style", "top", '240px'],
            ["style", "opacity", '0'],
            ["style", "left", '10px']
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
         "${_fart_ray}": [
            ["style", "opacity", '0']
         ],
         "${_bent_man}": [
            ["style", "cursor", 'pointer']
         ],
         "${_fire_fart}": [
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
            { id: "eid109", tween: [ "transform", "${_fartminis}", "scaleY", '1', { fromValue: '0.75'}], position: 2020, duration: 371, easing: "easeInQuad" },
            { id: "eid84", tween: [ "style", "${_fart_whisper}", "left", '24px', { fromValue: '24px'}], position: 2427, duration: 0 },
            { id: "eid72", tween: [ "transform", "${_fart_whisper}", "scaleX", '1.5', { fromValue: '1'}], position: 2427, duration: 407 },
            { id: "eid74", tween: [ "transform", "${_fart_whisper}", "scaleX", '1', { fromValue: '1.5'}], position: 2834, duration: 416 },
            { id: "eid31", tween: [ "style", "${_cloud_farts_g3}", "top", '149px', { fromValue: '149px'}], position: 500, duration: 0 },
            { id: "eid34", tween: [ "style", "${_cloud_farts_g3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 103 },
            { id: "eid35", tween: [ "style", "${_cloud_farts_g3}", "opacity", '0', { fromValue: '0.9981799721717834'}], position: 603, duration: 107 },
            { id: "eid36", tween: [ "style", "${_cloud_farts_g3}", "opacity", '1', { fromValue: '0.0021860001143068075'}], position: 710, duration: 135 },
            { id: "eid37", tween: [ "style", "${_cloud_farts_g3}", "opacity", '0', { fromValue: '1'}], position: 845, duration: 155 },
            { id: "eid40", tween: [ "style", "${_speak_fart_g}", "top", '240px', { fromValue: '240px'}], position: 1000, duration: 0 },
            { id: "eid63", tween: [ "style", "${_fartminis}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 95 },
            { id: "eid64", tween: [ "style", "${_fartminis}", "opacity", '0', { fromValue: '1'}], position: 2095, duration: 108 },
            { id: "eid65", tween: [ "style", "${_fartminis}", "opacity", '1', { fromValue: '0.000000'}], position: 2203, duration: 118 },
            { id: "eid66", tween: [ "style", "${_fartminis}", "opacity", '0', { fromValue: '1'}], position: 2321, duration: 106 },
            { id: "eid23", tween: [ "style", "${_fart_ray}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
            { id: "eid26", tween: [ "style", "${_fart_ray}", "opacity", '0', { fromValue: '1'}], position: 125, duration: 125 },
            { id: "eid28", tween: [ "style", "${_fart_ray}", "opacity", '1', { fromValue: '0.000000'}], position: 250, duration: 103 },
            { id: "eid29", tween: [ "style", "${_fart_ray}", "opacity", '0', { fromValue: '1'}], position: 353, duration: 147 },
            { id: "eid38", tween: [ "style", "${_speak_fart_g}", "left", '10px', { fromValue: '10px'}], position: 1000, duration: 0 },
            { id: "eid30", tween: [ "style", "${_cloud_farts_g3}", "left", '10px', { fromValue: '10px'}], position: 500, duration: 0 },
            { id: "eid108", tween: [ "transform", "${_fartminis}", "scaleX", '1', { fromValue: '0.75'}], position: 2020, duration: 371, easing: "easeInQuad" },
            { id: "eid58", tween: [ "style", "${_fire_fart}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 107 },
            { id: "eid59", tween: [ "style", "${_fire_fart}", "opacity", '0', { fromValue: '1'}], position: 1607, duration: 143 },
            { id: "eid60", tween: [ "style", "${_fire_fart}", "opacity", '1', { fromValue: '0.000000'}], position: 1750, duration: 127 },
            { id: "eid61", tween: [ "style", "${_fire_fart}", "opacity", '0', { fromValue: '1'}], position: 1877, duration: 123 },
            { id: "eid68", tween: [ "style", "${_fart_whisper}", "opacity", '1', { fromValue: '0.000000'}], position: 2427, duration: 407 },
            { id: "eid69", tween: [ "style", "${_fart_whisper}", "opacity", '0', { fromValue: '1'}], position: 2834, duration: 416 },
            { id: "eid85", tween: [ "style", "${_fart_whisper}", "top", '209px', { fromValue: '209px'}], position: 2427, duration: 0 },
            { id: "eid73", tween: [ "transform", "${_fart_whisper}", "scaleY", '1.5', { fromValue: '1'}], position: 2427, duration: 407 },
            { id: "eid75", tween: [ "transform", "${_fart_whisper}", "scaleY", '1', { fromValue: '1.5'}], position: 2834, duration: 416 },
            { id: "eid42", tween: [ "style", "${_speak_fart_g}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 115 },
            { id: "eid48", tween: [ "style", "${_speak_fart_g}", "opacity", '0', { fromValue: '1'}], position: 1115, duration: 135 },
            { id: "eid49", tween: [ "style", "${_speak_fart_g}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 108 },
            { id: "eid50", tween: [ "style", "${_speak_fart_g}", "opacity", '0', { fromValue: '1'}], position: 1358, duration: 142 },
            { id: "eid80", tween: [ "style", "${_fart_whisper}", "-webkit-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid444", tween: [ "style", "${_fart_whisper}", "-moz-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid445", tween: [ "style", "${_fart_whisper}", "-ms-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid446", tween: [ "style", "${_fart_whisper}", "msTransformOrigin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid447", tween: [ "style", "${_fart_whisper}", "-o-transform-origin", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [100,100]}], position: 2427, duration: 0 },
            { id: "eid174", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fart_ray}', [] ], ""], position: 0 },
            { id: "eid175", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fire_fart}', [] ], ""], position: 0 },
            { id: "eid176", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fartminis}', [] ], ""], position: 0 },
            { id: "eid177", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_speak_fart_g}', [] ], ""], position: 0 },
            { id: "eid178", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_cloud_farts_g3}', [] ], ""], position: 0 },
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
      r: ['0','0','90px','90px','auto','auto'],
      id: 'Group',
      t: 'image',
      f: ['rgba(0,0,0,0)','images/Group.png'],
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
      transform: [],
      rect: ['114px','0px','0','0','auto','auto']
   },
   {
      id: 'body_g',
      type: 'rect',
      transform: [],
      rect: ['0px','45px','0','0','auto','auto']
   },
   {
      id: 'arms_g',
      type: 'rect',
      transform: [],
      rect: ['134px','94px','0','0','auto','auto']
   },
   {
      id: 'leg_thigh_g',
      type: 'rect',
      transform: [],
      rect: ['51px','170px','0','0','auto','auto']
   },
   {
      id: 'leg_calf2_g',
      type: 'rect',
      transform: [],
      rect: ['34px','234px','0','0','auto','auto']
   },
   {
      id: 'foot_g',
      type: 'rect',
      transform: [],
      rect: ['33px','295px','0','0','auto','auto']
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
         "${_head_g}": [
            ["style", "left", '114px'],
            ["style", "top", '0px']
         ],
         "${_leg_thigh_g}": [
            ["style", "left", '51px'],
            ["style", "top", '170px']
         ],
         "${_leg_calf2_g}": [
            ["style", "left", '34px'],
            ["style", "top", '234px']
         ],
         "${_foot_g}": [
            ["style", "left", '33px'],
            ["style", "top", '295px']
         ],
         "${symbolSelector}": [
            ["style", "height", '330px'],
            ["style", "width", '216px']
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
      rect: ['0px','35px','121px','50px','auto','auto'],
      id: 'fart-rays',
      transform: [[],['-45']],
      type: 'image',
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
      rect: ['16px','7px','44px','64px','auto','auto'],
      id: 'cloud-farts2Copy',
      transform: [[],['136']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cloud-farts.png','0px','0px']
   },
   {
      rect: ['7px','43px','44px','64px','auto','auto'],
      id: 'cloud-farts2',
      transform: [[],['59'],[],['0.594','0.594']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cloud-farts.png','0px','0px']
   },
   {
      rect: ['53px','66px','26px','38px','auto','auto'],
      id: 'cloud-farts2Copy2',
      transform: [[],['2']],
      type: 'image',
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
      rect: ['11px','7px','39px','45px','auto','auto'],
      id: 'speak-fart',
      transform: [[],['50']],
      type: 'image',
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
