'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "22235ae932b4d8cd57f5f1bfed22d635",
"index.html": "658cf1af5873bd30a8356bba2940719b",
"/": "658cf1af5873bd30a8356bba2940719b",
"main.dart.js": "a4f4a0f76703cde06353902e3213d8cc",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a99fcc181180cf73a8d142b5645cc0e7",
".git/config": "f3df88254289ec2095bfd68d90cf3daa",
".git/objects/61/18ec6413eeece19b606cb73a0d317dd789f0c0": "11b20c805488d4b24ff7bfcf9b980484",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/6f/495eaaef202324d82ef88da0c91064c8101013": "d17ddd0bdbbe4d5bb3392d281fecfb03",
".git/objects/03/94317e722630f88b5dd5eb4d863091fdb769b4": "83506a9d67e1f42c0404792da3de7fa8",
".git/objects/03/33b8d8138581f8b7a7051ee10619bb309de24a": "e476ae9551f3d1723b73a7d519f30037",
".git/objects/6a/27dc5a81757bcd8f9fd6974b251d3201503ea9": "97f922a0e806592226178641969ee0eb",
".git/objects/35/2dd97edb293f126e1b6f68a34e3f2d73c55465": "aec4631c69710e83dd266d9dbf53136d",
".git/objects/94/3e44f5aea75a511f80f29e037276aa17d58227": "d1d3f6c2bfe84dd598c41f9a1e682d34",
".git/objects/94/63d60f876b2d16a0e2c463a27ea740f5c9deed": "0594baa5628ba6ca794c9db842626db8",
".git/objects/0e/01276bed6f33e8d8d392e119108ca597f57331": "90aa88b4309e014d4dfb2ad264830258",
".git/objects/60/b2de48a98752e7816e9254b0c4ce2f8649e13c": "674a3e27ccfd02193092fcf4586ec89e",
".git/objects/5f/223183a0f2153f78b8a7e55ae9bbcdda0f3655": "4a76d88e7874c56b4a47ab73dc10d9da",
".git/objects/5f/16353eb62982a9710bcff4102a100599b32d94": "98df284518db40362ce5aa24ff3ae1e4",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/02/5244aa3e03b01c9c319e9385692f40a536a019": "57595a1a13202ab46a716bab63c9bad8",
".git/objects/b2/44c732b245b8334efff3daaf7f69413587e709": "19898e0cf27c4f8a61900068bc4e1154",
".git/objects/d0/b83a9b188c5ecbfab4f82cca75c8dded156757": "8d9fc5986ccc3adfb354c696bc124440",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/b3/0baf51a1c111d570c988691f1be060307307a5": "be96e7744d5f7538c9ed15c36338ead1",
".git/objects/da/1d31fca12ab8624069f4ab35cc7ee96e13251d": "bfd9f7d63d3e1ec42e2fa08fcb63daa0",
".git/objects/b4/655f4b55b414ae387f3ec337329781161f6072": "c0afba984a6fc05c4be1ce08e1a22413",
".git/objects/b4/76a7b34d64e560dae53ab7bd3e1c8c28ea90dc": "21d41275bf9e6fef9d54ef8274ec3700",
".git/objects/a2/f903bbdfcae8011a0f66dd4d736a5e7af29168": "c33400cfbb0709a8e631552d3023f1f2",
".git/objects/a5/5013fbeb94c2242f5c96aa1d800946df2abc6c": "3160e4ed174306e550f6387d1396f0ae",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b3c5e6dc8f5aaad8495d7c230cc4616fb7f5be": "20b5c74bcf93b19f1c55c8d239901763",
".git/objects/e5/dbaa481bf09f29d90109c77a318cb7cafaecb0": "9a40421b9c57407d3b68152e40e73476",
".git/objects/e2/2b5cebb77fb10353d94c9496aac48907e06717": "065215d305aa6228c6e9b9c752cdf517",
".git/objects/f4/b11da9d8db04a87498c5ca3dfbd5c23c3eedd3": "6e10ac491646a2ee2f17b1d2cc393478",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/e99c5e874ea6847f00292234bea4bf848632dd": "040d37b39b2936be91d69d7427c497f3",
".git/objects/cf/aaaa387bfac720417c6779dfbdc458c00acd27": "c612dee84d2f0ffbb54ae2f91cc8b5f8",
".git/objects/cf/b908c5b9440d484a59167ca371c2c5265f7790": "419c68a7ca364baa10bedcf6c13cfc29",
".git/objects/fe/b82d4e88500a097d224f612b2374e6178af218": "e98ca5bea0ac0dc3f2ce1eff365feef3",
".git/objects/fe/ee8f5e84c7476f08b50856a59a0f00c7a25837": "92eaf04312baa64b5abd213ae65d8473",
".git/objects/c1/5389a117f9cb8d6d3ec3ae363899a95ed8899f": "e3c22cae925c2e4fa8f819e004830a54",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/18/8219ec8a4dc03df57312cc4976c07d30c0e657": "9a938417211993ab115b22f9c2f242e9",
".git/objects/7d/d49f453190f41fc78cae63edda0beb8b8167af": "c374f2912a9baf0f3b81e437e36d1536",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/16/55bd319e471fbb52b310998393287976402ea1": "cb496bc561dc1dbed3c7b71f24b2c0af",
".git/objects/45/963a2d63c560ddd5fdd44314a77114fd737223": "ab32e6b2599b69c69a5405a78bab6af0",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/28/6fefb94569c80e6c1cca6d56435291d22db84a": "65e176cd0814031d4a42eb62bab40fc8",
".git/objects/28/892dabeddf441ab3021c97a847ae6a611141e0": "bb0db801ec1e25edca0bb12e35ce0948",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/bb0a3e5573ead564eb807e1620e1f21ba030cc": "aafb2e628aba27fd8dafb67586db65b1",
".git/objects/19/97eca0c3d3246932ecdc1123caf40e071eab50": "cd2298967bf927628c3db623bc9b18d5",
".git/objects/43/be81941a885f41c080f12f99f7b8c5d721ec80": "9fa7a6f75e642472b0b44cec28872a9b",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/b40dc06a920818b29504927d215e7497ffa62f": "aa9083c093f8503adaa881b5a05ad8d6",
".git/objects/9f/d79f100592f91b9725d230fbb105bdf14ec56b": "f90bd26931443015aed7e5ce6ec4b561",
".git/objects/38/fba1c25fd51469e0a605af136c1fa739f00934": "0d1fda7e64007b9a4181abed82c8d915",
".git/objects/5c/58d9a73451d5cde12e99d9ab7785b881fd5e77": "712fd35773e8247aa22fd85a95d205d0",
".git/objects/5d/b92beaeddca887fcf4853e4f08952f04d60dc6": "b4b5223d9bc40b4d73bcaa7a658c6558",
".git/objects/65/a5e1342e6a4e395c3ef3e27e4e8a7c53c2ac30": "c40657d46dd24dd83714bd5d2868025c",
".git/objects/62/6408c0fee5b53d12b86d5f29e3705da52f58ed": "4738785113120319acb7bc3477d9d23b",
".git/objects/98/968b2da19b69282afcc59b73d9ffd473a19f1a": "a6921893f468a992804c219044402c2a",
".git/objects/3f/5a25d862a238a8bd25db91cb992942bb203151": "8284c801feb208cb21bf9bb532dbae69",
".git/objects/30/68ef8a2a3f235e07e00849d066a8f29538de9e": "9c124f403355ec6317bebdf5aec8ba79",
".git/objects/5e/111be890de47aa8cc57c3a1be8b04c8e9eed6a": "c3bc0da5eb11903929d58d1a23cdeacc",
".git/objects/5b/aa6e06c8d6c02d8f242aac27073f4cdda668f0": "6d37cc9277c051a69dca33c38c7970a8",
".git/objects/5b/0afc5b53c3dc738fe7dc941b582b400c68c6f4": "a2fb7cc9acbd1b886229c3afc39c21fc",
".git/objects/08/b54524799ced206dc5c65d0c80559824cda6e1": "62b736436b9e45a442613f7804a5ce83",
".git/objects/06/aabc22e0ad2c90f7c28693dbcdfef392ea42d2": "a7c8010af545d73c20167212e7422a94",
".git/objects/39/e016773c8cf4785ba3cf00bdd3ad9392949bd3": "7553a79c2ba58118402863c75f012efa",
".git/objects/55/ab2eff863730ae48e4920a1ba68c42c76bd5cb": "efdba217c02c32e0a2a6a353dca3e7ed",
".git/objects/55/e578837fc09103e6bf58adba2a06e86f4e8a52": "58c07f789d3e3abbbc592b9392b8829c",
".git/objects/d4/b1c48eeccb8bf872b9e263f910b1be50c3192d": "8cfe03f5ea3d1da5d68136c5952b46eb",
".git/objects/a0/4de9bed15969b07831b921983cdbe6556920bc": "de7fd798c38ea55f519b0f19d5a33c3a",
".git/objects/a0/17718d38f892829068448a8be0c51c1755062e": "2b1d52fc84133a19b32ed16aa3e2ac0d",
".git/objects/b1/b2a640af4b57aaeef853121a8a260ab36df91c": "0eb7583c3ed2052773add83e7377365c",
".git/objects/dc/a4eeaa6135c34a5bd433243abf917e37542ebb": "5d0fd52a0871db39889564b9a3f0d25b",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/d2/a4e08fb03619f122a0d79401e9f45af5d3b42b": "5e022c9182147e5e0629c4175e66db99",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/39e5b6580a46763af9563ce5ddadadfcd79919": "4c2da48803bf541e46ee7a7ab4128ff9",
".git/objects/a8/4d1cac20ffb189d5d79f2222a4ca59e3e44f22": "b3a2499da6d58f9e38e0449dd2c2c30f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/217b19e676203f108aee3df2102047551e6ac7": "3726b570026ad33c272aca140ceb6997",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a603a5ba88a4a8d0a7d990082db54df5f46ab0": "9a516f21cc125ad7a5ef72e130c516f0",
".git/objects/a1/7cedc5aa82cdefc85e6347994ad43e99a4e6b2": "925963f168c854dcd82463f44be32ae2",
".git/objects/c3/1decf184cd3a7000cfbbc26b8ddaea6b7a6044": "f90f8c0747b789d6fa5d9e45c4c788d8",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e6/75c8f805ac827d60cf3e0fba8ba08412fe7a19": "bcd0ce4539a51a665067bd0a4c8fa6fd",
".git/objects/f9/13d7ff5c7dd07e2fae871774485e72802c88cc": "3eeda5c6b9ca2986dfe940363cdfdb92",
".git/objects/f9/c0be37b08b40c08f2eff02577a64dfe439d6f7": "2b468703b5d3578c6896d382392cb1d4",
".git/objects/fa/5be6a17113b36574663c085402843989803624": "8bc784f8049f345491d372dc57abfebb",
".git/objects/fa/d8c00633b6dcb446206cf79c3ccec5c01c69d1": "3641f692613d26b96cad2d7c093d8b0f",
".git/objects/ff/f4bf0fdbb481bbd1d051f2218852dc47234ce1": "b5f197dbb95eb38c4f59fa7caede3dfb",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/a9a00d2bca65077420aa6637319463eab0822a": "e8e1dff84feee5c21437d0e51866c463",
".git/objects/f8/e27d83d198cca95d2ed3324c4c12a3dd0178ac": "3952ce2043bcace34bd1f209582962ed",
".git/objects/ce/6a46b0cc249545a14f2ca7958798a8f1c179de": "22bff0167882cad530d2baffcab5d7f1",
".git/objects/ce/86e720439a6d0b47036e820c1fd23be25cdf8e": "7740b07d5599951c96f348fed542dd07",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/c52e7ca9d4cc4f99749cd218cd1d7c7dc6b45c": "6b7fffd5528b5659e3b46e95c3c23526",
".git/objects/70/7ca86ed3398a3114776f0c638b37b1f183a592": "1d94de97ce6db0424ae981d4adcca1c4",
".git/objects/4a/a79cc048578eae9fc36ab6e7095fbeb50fe8f2": "d14457576951a69f1efe538862bbf749",
".git/objects/4a/1892b15273f73a826f7464db643edda619f998": "bb8cdd3a7ae3c9e4021c60e52117d89e",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/b0cfa0fb0afb678ab8398d3c5860dd15455214": "fad3fc8bcb65eb919f563c48bb031c09",
".git/objects/8d/1dfbe949a933461a092e971c012599940d8838": "d4f2b77984da9a50e53177acc46acc35",
".git/objects/15/2681cfcb826732c69e8fe2b73c6af20ffebf04": "6b7ca2dcaae76845ab9cd9a91fa58e47",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/40/f3d082af1a82c1c9e1dfde7887eb2cd8a629dd": "9fb803046d2462528e69e86920ab8317",
".git/objects/8b/e57f49c8fa404d1f2aa5663ef6ec022ab57601": "9cb1063e397eb156cc6707a3d188e598",
".git/objects/8b/a098d1bd69cbc4f79879872b6ba223888c4c69": "2f5a4d82e94e4623bc3ecec6e896aec1",
".git/objects/13/b16138c74b5306af904324603466a947fce0f7": "a3bdaab5aa68ebba37b3e8ef9dab9777",
".git/objects/22/bc9c2904e284d5e0a5ee2892792a371e06637e": "d00a4053df64418b343245234330e828",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "da2d322ba1781be9d2346a1b9937779b",
".git/logs/refs/heads/master": "da2d322ba1781be9d2346a1b9937779b",
".git/logs/refs/remotes/origin/master": "08fabf04d20e0015b510598fa62eccfa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "57d0352f5b46b39df298047d9fb5c333",
".git/refs/remotes/origin/master": "57d0352f5b46b39df298047d9fb5c333",
".git/index": "01a3a18309edc6f7c0f58aa3f7eb7a53",
".git/COMMIT_EDITMSG": "5cde6e5e0deb4eb3702ba72e318f6cc0",
"assets/AssetManifest.json": "2bc28471bf62612c49260e9cc6de2e9a",
"assets/NOTICES": "145bd1b733f260c14f239edf37f95087",
"assets/FontManifest.json": "922e0b0976a43c16b3929144a57017ac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator_small.gif": "502a31bacaa2182d511eb4866354fbab",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator.gif": "3990e106caf3029a36788b9b58a86b41",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator_small.gif": "05ffb16f4f31cf9941a8295740476ee1",
"assets/packages/loading_gifs/assets/images/placeholder_empty.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/flag_vn.svg": "c2bea90372bfc144d6a8fad62d1757a0",
"assets/assets/svg/logo.svg": "3d9225c3b47ceafaae717a7381846042",
"assets/assets/svg/flag_en.svg": "7d5e8b13ac86651b915419aff60f01bc",
"assets/assets/images/nut_canh.png": "3a5ac80149f0e511a7120016db0650aa",
"assets/assets/images/Alexa.png": "09912198309c4009f09ad44b9f0e3d18",
"assets/assets/images/spl_xoay_goc.png": "4a55377d4cc3aecf2922c35bd5c1b934",
"assets/assets/images/downlight.png": "a6f3a752422eb693556743ae356950f7",
"assets/assets/images/5in1.png": "2baae4d9fceab71ec928ade13e1eb4d6",
"assets/assets/images/ct_rem_cuon.png": "cb55ca2660078c6d8c01ac3e2847d6e1",
"assets/assets/images/ct_quat.png": "06dbd2082b945825dbfffdcb6014f496",
"assets/assets/images/ct_nguon_1_day.png": "282cc4e9b5fdabee915959f585ede8e2",
"assets/assets/images/ct_cua_cuon.jpeg": "f58ef275c2829de20582c01d8df60204",
"assets/assets/images/yale.jpeg": "af061e43d82c1f630b69814db8a8e408",
"assets/assets/images/ct_congsuatcao.png": "ab80c5174b170230df695105cab4ffad",
"assets/assets/images/daikin.png": "72850f56e506b00143f01d605039cb76",
"assets/assets/images/2in_2out.png": "221d82ad691f5845d2d4b782c82be8e9",
"assets/assets/images/hc_1.5.png": "b86f72a08ad4c531048f0535994f0919",
"assets/assets/images/zigbee.png": "2ccff2c66ec7aea18e10bc0580d609cd",
"assets/assets/images/ct_rem_dtlm99.png": "c5a3772350e3d06cbe290aca9955f59f",
"assets/assets/images/led_rgb.png": "955d2117448a0fc320b7103a9a0a1e3f",
"assets/assets/images/cong_tac_cam_ung.png": "221219085269afb8b9cbbcf2c4ee83d6",
"assets/assets/images/led_panel.png": "1b0f042aca406dabfaf113432bcadb92",
"assets/assets/images/cc_rem.png": "9f2b9529ca5023460da2192f0b00034d",
"assets/assets/images/repeater.png": "e64e20bec7b67c600f22260d266ef046",
"assets/assets/images/hc_3.0.png": "4aaafd996350927654dae3bdf23541d9",
"assets/assets/images/ct_cauthang_2in1.png": "8eba003aa08af7a384774a60bcbe4072",
"assets/assets/images/luvit.jpeg": "c4eb6bfe3b8828732825de7aaea5cb0c",
"assets/assets/images/Bluetooth_Mesh.png": "a325684e4b704b7488425fdd4366fe09",
"assets/assets/images/ai_hub.png": "90575a7ab84c2db51ebf0d47f8456428",
"assets/assets/images/dtlm99.png": "e9b34aebdc6f66069df87b686549e89d",
"assets/assets/images/ir.png": "af18b34e3d642e648ace29d994a47e71",
"assets/assets/images/google_assistant.png": "11637fdefdd7c240890ba182ae2b4c33",
"assets/assets/images/LUMI_logo.png": "9dce4ce9d4c25a4d327366f552eadb90",
"assets/assets/images/ct_dimmer.png": "3efa0299b012284afc29c413a461af2d",
"assets/assets/images/ct_rem_3_day.jpeg": "2eef9f3710e8e4b61fc410da89f90c57",
"assets/assets/images/module_input.png": "ad4361d35fea891d59feb818dcfd510d",
"assets/assets/images/module_rgb.png": "beb581fde590a6ee76cab6fbe7c30565",
"assets/assets/images/ct_camung.png": "7aeb7e4c1f14b4d43b96277a1821569c",
"assets/assets/images/ct_rem_4_day.jpeg": "68feb5c12d22337e6c004348a4d6632e",
"assets/assets/images/loa_maika.jpeg": "c01918b7f3dfce8f7cfd59e9d6d48ee7",
"assets/assets/images/mini_spl_xoay.png": "727b22e0ac365ef1e7cca96ec4e0f870",
"assets/assets/images/cb_cua.png": "1e5bd561a70a4f32f8dcfa28ba2fe580",
"assets/assets/images/dentha_sml.png": "a4ea4ba9535e60c34d7e824c1afcb634",
"assets/assets/images/mini_spl.png": "1a113e75686c5f4cca21281098fb6780",
"assets/assets/images/ma_v2.png": "eb27feb16aa63357e209353b4047da12",
"assets/assets/images/ma_v3.png": "58d4450361054bbac307fb6923d877cc",
"assets/assets/images/cb_chuyendong.png": "8b53da05c41e29a718a428268519dbf6",
"assets/assets/images/banner_lumi.png": "d0566a0c36f47be204e8733963cb0288",
"assets/assets/images/den_tuong_sml.jpeg": "d1e7d3df93e562847de1eb7efaa8acff",
"assets/assets/images/innoviti.png": "c641c9e0b87f8499e6164eaec91d7da7",
"assets/assets/images/dea.jpeg": "c2774a8ea25891cbe0a2eaea401eea0f",
"assets/assets/images/ct_cong.png": "6e9a23745ab0e271fc2c4ca061921136",
"assets/assets/images/cb_gantran.png": "a022384754aea068ad9596f05a9a259c",
"assets/assets/fonts/SVN-Helvetica-Neue-Bold.otf": "c3defaf5e522c77f0450b1dc65321b86",
"assets/assets/fonts/SVN-Helvetica-Neue-Regular.otf": "5a7650bc79c98522dee8b07c4bc37346",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
