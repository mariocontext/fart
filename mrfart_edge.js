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
            id:'fart_rays_g',
            type:'rect',
            rect:['12','158','0','0','auto','auto'],
            transform:[]
         },
         {
            id:'bent_man',
            type:'rect',
            rect:['93','83','auto','auto','auto','auto'],
            cursor:['pointer']
         }],
         symbolInstances: [
         {
            id:'fart_rays_g',
            symbolName:'fart_rays_g'
         },
         {
            id:'bent_man',
            symbolName:'bent_man'
         }
         ]
      },
   states: {
      "Base State": {
         "${_stage}": [
            ["style", "height", '480px'],
            ["color", "background-color", 'rgb(255,255,255)'],
            ["style", "width", '320px']
         ],
         "${_bent_man}": [
            ["style", "cursor", 'pointer']
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
      tag: 'img',
      f: ['rgba(0,0,0,0)','images/Group.png']
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
      rect: ['0','1','auto','auto','auto','auto']
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
         duration: 250,
         autoPlay: true,
         labels: {
            "fartSound1": 250
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
      r: ['0','2','87','100','auto','auto'],
      id: 'speak-fart',
      t: 'image',
      tag: 'img',
      f: ['rgba(0,0,0,0)','images/speak-fart.png']
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
      r: ['0','0','83','119','auto','auto'],
      id: 'cloud-farts',
      t: 'image',
      tag: 'img',
      f: ['rgba(0,0,0,0)','images/cloud-farts.png']
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
      t: 'rect',
      tf: [],
      r: ['114px','0px','0','0','auto','auto']
   },
   {
      id: 'body_g',
      t: 'rect',
      tf: [],
      r: ['0px','45px','0','0','auto','auto']
   },
   {
      id: 'arms_g',
      t: 'rect',
      tf: [],
      r: ['134px','94px','0','0','auto','auto']
   },
   {
      id: 'leg_thigh_g',
      t: 'rect',
      tf: [],
      r: ['51px','170px','0','0','auto','auto']
   },
   {
      id: 'leg_calf2_g',
      t: 'rect',
      tf: [],
      r: ['34px','234px','0','0','auto','auto']
   },
   {
      id: 'foot_g',
      t: 'rect',
      tf: [],
      r: ['33px','295px','0','0','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'body_g',
      symbolName: 'body_g',
      sN: 'body_g'
   },
   {
      id: 'leg_calf2_g',
      symbolName: 'leg_calf2_g',
      sN: 'leg_calf2_g'
   },
   {
      id: 'arms_g',
      symbolName: 'arms_g',
      sN: 'arms_g'
   },
   {
      id: 'leg_thigh_g',
      symbolName: 'leg_thigh_g',
      sN: 'leg_thigh_g'
   },
   {
      id: 'foot_g',
      symbolName: 'foot_g',
      sN: 'foot_g'
   },
   {
      id: 'head_g',
      symbolName: 'head_g',
      sN: 'head_g'
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
