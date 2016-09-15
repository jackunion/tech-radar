var h = 1000;
var w = 1450;

var radar_arcs = [
  {'r': 100, 'name': 'ADOPT'},
  {'r': 200, 'name': 'TRIAL'},
  {'r': 300, 'name': 'ASSESS'},
  {'r': 400, 'name': 'HOLD'}
];

// movement:
//   t = moved (triangle)
//   c = stayed put (circle)
//
// blipSize: 
//  This is optional, if you omit this property, then blip size will be 70.
//
// url:
//  This is optional, if you add it then blips will be clickable to some URL.
//
// pc: (polar coordinates)
//  r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
var radar_data = [
  { 
    "quadrant": "Techniques; Frameworks & Tools",
    "left" : 45,
    "top" : 188,
    "color" : "#8FA227",
    "items" : [
  {
    "name": "AWS - SNS",
    "pc": {
      "r": 78,
      "t": 105
    },
    "movement": "t"
  },
  {
    "name": "CoreMedia",
    "pc": {
      "r": 38,
      "t": 150
    },
    "movement": "t"
  },
  {
    "name": "Chef",
    "pc": {
      "r": 46,
      "t": 135
    },
    "movement": "t"
  },
  {
    "name": "Spring",
    "pc": {
      "r": 45,
      "t": 120
    },
    "movement": "c"
  },
  {
    "name": "MAVEN",
    "pc": {
      "r": 52,
      "t": 165
    },
    "movement": "t"
  },
  {
    "name": "jQuery",
    "pc": {
      "r": 34,
      "t": 172
    },
    "movement": "t"
  },
  {
    "name": "CKEditor",
    "pc": {
      "r": 77,
      "t": 112
    },
    "movement": "t"
  },
  {
    "name": "SASS",
    "pc": {
      "r": 89,
      "t": 142
    },
    "movement": "t"
  },
  {
    "name": "JSP",
    "pc": {
      "r": 87,
      "t": 127
    },
    "movement": "t"
  },
  {
    "name": "Selenium",
    "pc": {
      "r": 41,
      "t": 157
    },
    "movement": "t"
  },
  {
    "name": "Metrics",
    "pc": {
      "r": 60,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "Charles",
    "pc": {
      "r": 48,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "Webdriver (Chrome FireFox)",
    "pc": {
      "r": 69,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "Grunt",
    "pc": {
      "r": 77,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "Handlebars",
    "pc": {
      "r": 89,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "Robolectric",
    "pc": {
      "r": 78,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "Jangaroo",
    "pc": {
      "r": 82,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "OWASP",
    "pc": {
      "r": 56,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "Gitflow",
    "pc": {
      "r": 50,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "NodeJS",
    "pc": {
      "r": 80,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "Independant Service Deployment",
    "pc": {
      "r": 35,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "ImageMagick",
    "pc": {
      "r": 48,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "Cucumber",
    "pc": {
      "r": 60,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "Nexpose",
    "pc": {
      "r": 50,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "Decupling deployment from release",
    "pc": {
      "r": 115,
      "t": 151
    },
    "movement": "t"
  },
  {
    "name": "Delivery Teams",
    "pc": {
      "r": 136,
      "t": 139
    },
    "movement": "t"
  },
  {
    "name": "Continuous Deployment",
    "pc": {
      "r": 136,
      "t": 103
    },
    "movement": "t"
  },
  {
    "name": "etcd",
    "pc": {
      "r": 136,
      "t": 127
    },
    "movement": "c"
  },
  {
    "name": "Immutable Server",
    "pc": {
      "r": 136,
      "t": 115
    },
    "movement": "t"
  },
  {
    "name": "Swagger",
    "pc": {
      "r": 142,
      "t": 163
    },
    "movement": "t"
  },
  {
    "name": "WebComponents",
    "pc": {
      "r": 147,
      "t": 175
    },
    "movement": "t"
  },
  {
    "name": "Documented API Arcitecture",
    "pc": {
      "r": 163,
      "t": 145
    },
    "movement": "t"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 163,
      "t": 133
    },
    "movement": "c"
  },
  {
    "name": "Immutable.js",
    "pc": {
      "r": 174,
      "t": 157
    },
    "movement": "t"
  },
  {
    "name": "Resilience Engineering",
    "pc": {
      "r": 174,
      "t": 169
    },
    "movement": "t"
  },
  {
    "name": "Ansible",
    "pc": {
      "r": 174,
      "t": 109
    },
    "movement": "t"
  },
  {
    "name": "Redux",
    "pc": {
      "r": 179,
      "t": 121
    },
    "movement": "t"
  },
  {
    "name": "HashiCorp Vault",
    "pc": {
      "r": 190,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "All services public ready",
    "pc": {
      "r": 190,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "SysDig",
    "pc": {
      "r": 190,
      "t": 95
    },
    "movement": "t"
  },
  {
    "name": "Reactive Architectures",
    "pc": {
      "r": 218,
      "t": 161
    },
    "movement": "t"
  },
  {
    "name": "Configuted Development Environments",
    "pc": {
      "r": 218,
      "t": 151
    },
    "movement": "t"
  },
  {
    "name": "ES6",
    "pc": {
      "r": 226,
      "t": 171
    },
    "movement": "t"
  },
  {
    "name": "GraphQL",
    "pc": {
      "r": 290,
      "t": 101
    },
    "movement": "t"
  },
  {
    "name": "Single CI instance for all Teams",
    "pc": {
      "r": 290,
      "t": 111
    },
    "movement": "t"
  },
  {
    "name": "LeSS",
    "pc": {
      "r": 342,
      "t": 123
    },
    "movement": "t"
  },
  {
    "name": "BFF - Backend for Frontend",
    "pc": {
      "r": 350,
      "t": 107
    },
    "movement": "t"
  },
  {
    "name": "Vert.x",
    "pc": {
      "r": 350,
      "t": 163
    },
    "movement": "t"
  },
  {
    "name": "AngularJS 2",
    "pc": {
      "r": 350,
      "t": 179
    },
    "movement": "t"
  },
  {
    "name": "Content Security Policies",
    "pc": {
      "r": 358,
      "t": 115
    },
    "movement": "t"
  }
]
  },
  { 
    "quadrant": "Data Management",
    "left": w-300+30,
    "top" : 188,
    "color" : "#587486",
    "items" : [
  {
    "name": "Kafka",
    "pc": {
      "r": 234,
      "t": 46
    },
    "movement": "t"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 342,
      "t": 52
    },
    "movement": "c"
  }
]
  },
  {   
    "quadrant": "Platforms & Infrastructure",
    "left" :45,
    "top" : (h/2 + 38),
    "color" : "#DC6F1D",
    "items" : [
  {
    "name": "Docker",
    "pc": {
      "r": 72,
      "t": 250
    },
    "movement": "c"
  },
  {
    "name": "TomCat",
    "pc": {
      "r": 63,
      "t": 220
    },
    "movement": "t"
  },
  {
    "name": "ServerSpec",
    "pc": {
      "r": 74,
      "t": 190
    },
    "movement": "t"
  },
  {
    "name": "Jenkins as a Deployment Pipeline",
    "pc": {
      "r": 56,
      "t": 205
    },
    "movement": "t"
  },
  {
    "name": "Jenkins",
    "pc": {
      "r": 88,
      "t": 235
    },
    "movement": "t"
  },
  {
    "name": "macOS Build Server",
    "pc": {
      "r": 65,
      "t": 212
    },
    "movement": "t"
  },
  {
    "name": "AWS - EC2",
    "pc": {
      "r": 70,
      "t": 257
    },
    "movement": "t"
  },
  {
    "name": "AWS - Lambda",
    "pc": {
      "r": 35,
      "t": 227
    },
    "movement": "t"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 136,
      "t": 236
    },
    "movement": "t"
  },
  {
    "name": "HSTS",
    "pc": {
      "r": 190,
      "t": 224
    },
    "movement": "t"
  },
  {
    "name": "HTTP2",
    "pc": {
      "r": 190,
      "t": 260
    },
    "movement": "t"
  },
  {
    "name": "Consul",
    "pc": {
      "r": 190,
      "t": 188
    },
    "movement": "t"
  },
  {
    "name": "QA in Production",
    "pc": {
      "r": 290,
      "t": 206
    },
    "movement": "t"
  },
  {
    "name": "Event Storing ???",
    "pc": {
      "r": 350,
      "t": 184
    },
    "movement": "t"
  }
]
  },
  { 
    "quadrant": "Languages",
    "color" : "#B70062",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": "HTML 5 / CSS",
    "pc": {
      "r": 39,
      "t": 310
    },
    "movement": "t"
  },
  {
    "name": "JAVA",
    "pc": {
      "r": 41,
      "t": 325
    },
    "movement": "t"
  },
  {
    "name": "JS",
    "pc": {
      "r": 41,
      "t": 280
    },
    "movement": "t"
  },
  {
    "name": "Objective-C",
    "pc": {
      "r": 62,
      "t": 340
    },
    "movement": "t"
  },
  {
    "name": "ActionScript",
    "pc": {
      "r": 39,
      "t": 295
    },
    "movement": "t"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 63,
      "t": 347
    },
    "movement": "t"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 62,
      "t": 317
    },
    "movement": "c"
  },
  {
    "name": "CoffeeScript",
    "pc": {
      "r": 52,
      "t": 287
    },
    "movement": "t"
  },
  {
    "name": "Groove",
    "pc": {
      "r": 60,
      "t": 302
    },
    "movement": "t"
  },
  {
    "name": "VCL (Varnish configuration Language)",
    "pc": {
      "r": 86,
      "t": 332
    },
    "movement": "t"
  },
  {
    "name": "TypeScript",
    "pc": {
      "r": 136,
      "t": 326
    },
    "movement": "t"
  },
  {
    "name": "Kotlin",
    "pc": {
      "r": 163,
      "t": 290
    },
    "movement": "t"
  }
]
  }
];
