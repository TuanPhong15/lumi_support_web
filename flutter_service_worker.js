'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "22235ae932b4d8cd57f5f1bfed22d635",
"index.html": "32481116488f533d47147c8d826c9489",
"/": "32481116488f533d47147c8d826c9489",
"main.dart.js": "2a9cb0c9ad3f5e1f7443fc7f25929559",
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
".git/objects/9e/16cbff2aca631d3297aea7c9cd2faa3b95f045": "1aca255b963c3f2d4266df3222018e87",
".git/objects/6a/27dc5a81757bcd8f9fd6974b251d3201503ea9": "97f922a0e806592226178641969ee0eb",
".git/objects/35/2dd97edb293f126e1b6f68a34e3f2d73c55465": "aec4631c69710e83dd266d9dbf53136d",
".git/objects/51/f187cd9efef9d6337fe9402d1388b9e921a8a1": "463ec55f22f9a596671fb0ff198bf7bd",
".git/objects/51/9c0e78c5d0b2e09745811c6f51d170bc3c0aa3": "1dfda159972679dd8851bb235ecd2b5d",
".git/objects/3d/16edf1d51ffea8af4669457b526615595415e4": "3008e8745e4541acc1c512f47b767c69",
".git/objects/94/3e44f5aea75a511f80f29e037276aa17d58227": "d1d3f6c2bfe84dd598c41f9a1e682d34",
".git/objects/94/63d60f876b2d16a0e2c463a27ea740f5c9deed": "0594baa5628ba6ca794c9db842626db8",
".git/objects/0e/01276bed6f33e8d8d392e119108ca597f57331": "90aa88b4309e014d4dfb2ad264830258",
".git/objects/0e/805182be4b396fe2e120242919c74ba366356b": "09f5ee032a6fc1e55df73d4976e9e23d",
".git/objects/60/b2de48a98752e7816e9254b0c4ce2f8649e13c": "674a3e27ccfd02193092fcf4586ec89e",
".git/objects/5f/223183a0f2153f78b8a7e55ae9bbcdda0f3655": "4a76d88e7874c56b4a47ab73dc10d9da",
".git/objects/5f/16353eb62982a9710bcff4102a100599b32d94": "98df284518db40362ce5aa24ff3ae1e4",
".git/objects/05/a70d606f7c738a39e628ae1ba8547f6efb02ce": "e58f988f351fc9657abfc5a5d62cffc3",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/02/5244aa3e03b01c9c319e9385692f40a536a019": "57595a1a13202ab46a716bab63c9bad8",
".git/objects/a4/ee958d6384585d8fdde9054f8b2c948b37bc58": "b3f0e27ef76853e5cd34c6ef69179c10",
".git/objects/b2/44c732b245b8334efff3daaf7f69413587e709": "19898e0cf27c4f8a61900068bc4e1154",
".git/objects/b2/d4edb291986694753c87f3e1e3491b6358660a": "e1715dbc367b2688b5944c82ab8170be",
".git/objects/d9/473157f034dd42d3fd39d7e36435988a66a91c": "4c59d21e8118d02bde079338226987d8",
".git/objects/d0/b83a9b188c5ecbfab4f82cca75c8dded156757": "8d9fc5986ccc3adfb354c696bc124440",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/be/a5aa139c60e8ee4955d1f18900a5ce368764ab": "f487a893d2c556ffd5806097f0b043da",
".git/objects/b3/0baf51a1c111d570c988691f1be060307307a5": "be96e7744d5f7538c9ed15c36338ead1",
".git/objects/da/1d31fca12ab8624069f4ab35cc7ee96e13251d": "bfd9f7d63d3e1ec42e2fa08fcb63daa0",
".git/objects/b4/655f4b55b414ae387f3ec337329781161f6072": "c0afba984a6fc05c4be1ce08e1a22413",
".git/objects/b4/76a7b34d64e560dae53ab7bd3e1c8c28ea90dc": "21d41275bf9e6fef9d54ef8274ec3700",
".git/objects/a2/f903bbdfcae8011a0f66dd4d736a5e7af29168": "c33400cfbb0709a8e631552d3023f1f2",
".git/objects/a5/94ddf385419bf5220744e20e18f5f466198888": "b178af3f1f7f4dab37ee90d1a5c3cba8",
".git/objects/a5/5013fbeb94c2242f5c96aa1d800946df2abc6c": "3160e4ed174306e550f6387d1396f0ae",
".git/objects/a5/e5040fc6fe1465536eae11fb283ffe4b356476": "5dfb3c918cc203a35dd81b1b6485b5f2",
".git/objects/bd/f5f9a080cbf2a99e01b3dc5ff3a45d6a65a2fb": "e2d4bdd0e2a41d8da133c1e35a4ff2ea",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b3c5e6dc8f5aaad8495d7c230cc4616fb7f5be": "20b5c74bcf93b19f1c55c8d239901763",
".git/objects/e5/dbaa481bf09f29d90109c77a318cb7cafaecb0": "9a40421b9c57407d3b68152e40e73476",
".git/objects/e2/2b5cebb77fb10353d94c9496aac48907e06717": "065215d305aa6228c6e9b9c752cdf517",
".git/objects/f4/b11da9d8db04a87498c5ca3dfbd5c23c3eedd3": "6e10ac491646a2ee2f17b1d2cc393478",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/8e7d9fe73c3b2e30a8bc086aefe86b7f933969": "81a9cd07bb471b7fb862d91791dd2e44",
".git/objects/eb/9eaa549fb2f166b5823c6c70cb2cf6c511a7d0": "46453b0877517501afc7dd207ecc2547",
".git/objects/eb/a13746d814a607658f49b98d2f8d5509c59caf": "88a24af15fe279a0f9d6c52952464bee",
".git/objects/c9/f31747e560c537bf0b709db28e6d0262d2fa99": "a9faae07025ba3a893a734df21113c62",
".git/objects/fc/e99c5e874ea6847f00292234bea4bf848632dd": "040d37b39b2936be91d69d7427c497f3",
".git/objects/fd/574a50da20c34d187f818c7046a775f9ab684a": "6237f2bc40c090d2d22343b3ec51dece",
".git/objects/f5/1118a4d832199f82041d431953662e7d465ec1": "07f9585c910e22007c281d9bcd73a6b6",
".git/objects/e3/32498ff93056071406a0f13105ad4c39f50c9c": "6a9ee7380f2b0665a4dd39597632b500",
".git/objects/cf/aaaa387bfac720417c6779dfbdc458c00acd27": "c612dee84d2f0ffbb54ae2f91cc8b5f8",
".git/objects/cf/b908c5b9440d484a59167ca371c2c5265f7790": "419c68a7ca364baa10bedcf6c13cfc29",
".git/objects/fe/cdf91c886d11861d9a633c62c3fc8169b44b02": "31c8b3b8a39aa1f078f24272454aedab",
".git/objects/fe/b82d4e88500a097d224f612b2374e6178af218": "e98ca5bea0ac0dc3f2ce1eff365feef3",
".git/objects/fe/ee8f5e84c7476f08b50856a59a0f00c7a25837": "92eaf04312baa64b5abd213ae65d8473",
".git/objects/c8/833a05003f57f70a1ed4815595261d56c452ec": "e2567b1375f487e814c761bc2cb74895",
".git/objects/ed/d1f330cb24faefdaf667833034e4a58cd7f0f4": "525433baaf516192c9d6004aacebbf0f",
".git/objects/c1/5389a117f9cb8d6d3ec3ae363899a95ed8899f": "e3c22cae925c2e4fa8f819e004830a54",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/083ad4925f3ec75d9d9fdda2253ff426b9cdab": "50ed8eb925977bba4cfcc5394ba81217",
".git/objects/18/8219ec8a4dc03df57312cc4976c07d30c0e657": "9a938417211993ab115b22f9c2f242e9",
".git/objects/27/46f0c8c3e3375bfc2d0ede7ce541f5ce6ff748": "e9ea2370a97b43e59e618b2ebc6808c5",
".git/objects/7d/d49f453190f41fc78cae63edda0beb8b8167af": "c374f2912a9baf0f3b81e437e36d1536",
".git/objects/7d/72d57b43aeefb15ff4027b87f6f76b8239b6bc": "3839ef027cf5d9b34bf20909cf2c33ec",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/16/a55c2da95655945442f439faa7c8c683796337": "431dec3280941649b888e637b24e3e42",
".git/objects/16/55bd319e471fbb52b310998393287976402ea1": "cb496bc561dc1dbed3c7b71f24b2c0af",
".git/objects/42/0f00be2250f3823f5b146d4b9d3928029bf77b": "96f3a97bba8f7bfa298c3f2bf6785524",
".git/objects/45/963a2d63c560ddd5fdd44314a77114fd737223": "ab32e6b2599b69c69a5405a78bab6af0",
".git/objects/1f/72d604fdb70351f4912c17d70687ed8ff6876a": "6204370566020409b2833270501e42ab",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/73/68250d3bd07b57e4cf8c2553ae0dfd0d2bb796": "64291a241d35ebe42a3cc2536c5ba90b",
".git/objects/73/b8af1eabe8862eaded48fc55a5915a60bbb0de": "1375a3ef1529a7064d12451287bb664f",
".git/objects/28/6fefb94569c80e6c1cca6d56435291d22db84a": "65e176cd0814031d4a42eb62bab40fc8",
".git/objects/28/892dabeddf441ab3021c97a847ae6a611141e0": "bb0db801ec1e25edca0bb12e35ce0948",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/bb0a3e5573ead564eb807e1620e1f21ba030cc": "aafb2e628aba27fd8dafb67586db65b1",
".git/objects/19/97eca0c3d3246932ecdc1123caf40e071eab50": "cd2298967bf927628c3db623bc9b18d5",
".git/objects/75/c49d06574112100af5c3412e29e180928efe60": "c73247b9638e4966f102456e77d6e13b",
".git/objects/81/e41d61edaf81978a8b608dac5a803dc6f6167d": "212989fe586faf39db1cc44983d2cc50",
".git/objects/72/c6b24f3e3f474b89b26315bdb4180ec8d1785d": "03f959f8f37e7d4f8d8b2d4c2584065a",
".git/objects/43/be81941a885f41c080f12f99f7b8c5d721ec80": "9fa7a6f75e642472b0b44cec28872a9b",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/0bee1bc62ce0033a749945d631be7e314cfd3c": "d8ee61745c386bf40748183eb47550ab",
".git/objects/9f/b40dc06a920818b29504927d215e7497ffa62f": "aa9083c093f8503adaa881b5a05ad8d6",
".git/objects/9f/d79f100592f91b9725d230fbb105bdf14ec56b": "f90bd26931443015aed7e5ce6ec4b561",
".git/objects/6b/8969e5632a4aef9d5bd7766d28950d582df31f": "8cbddd0c9d81a19e72a069fd2f557b4b",
".git/objects/38/fba1c25fd51469e0a605af136c1fa739f00934": "0d1fda7e64007b9a4181abed82c8d915",
".git/objects/36/b3cf9d3e53d4ddedcc837ca60023bdb8f73ced": "5bd0488b236d2e26c44d1f1e5859caee",
".git/objects/36/5f86920e9c1d25a4b0158e25a7cece7092aaf8": "29066e77c154ab6a06d12e0db414bc2b",
".git/objects/5c/58d9a73451d5cde12e99d9ab7785b881fd5e77": "712fd35773e8247aa22fd85a95d205d0",
".git/objects/09/b54623759624d4058a9a5d0216232ebaf142fc": "db73c7746b03638099ba8b20ec7050b9",
".git/objects/5d/b92beaeddca887fcf4853e4f08952f04d60dc6": "b4b5223d9bc40b4d73bcaa7a658c6558",
".git/objects/65/a5e1342e6a4e395c3ef3e27e4e8a7c53c2ac30": "c40657d46dd24dd83714bd5d2868025c",
".git/objects/62/6408c0fee5b53d12b86d5f29e3705da52f58ed": "4738785113120319acb7bc3477d9d23b",
".git/objects/54/158abca7b4dcc7414b7b373201ff90f0df298e": "40bce2b652fccebbfca083b69a1ffbc1",
".git/objects/98/968b2da19b69282afcc59b73d9ffd473a19f1a": "a6921893f468a992804c219044402c2a",
".git/objects/53/47603cee7494ce4edf100c44d3e65fa9150a54": "49e813fa3a1139309a682718f25384f9",
".git/objects/3f/5a25d862a238a8bd25db91cb992942bb203151": "8284c801feb208cb21bf9bb532dbae69",
".git/objects/3f/745e166d4527aa06bc6ee23d24086d9bc172f9": "c84358aba371d1fef99d8137641341d8",
".git/objects/30/68ef8a2a3f235e07e00849d066a8f29538de9e": "9c124f403355ec6317bebdf5aec8ba79",
".git/objects/5e/111be890de47aa8cc57c3a1be8b04c8e9eed6a": "c3bc0da5eb11903929d58d1a23cdeacc",
".git/objects/5b/aa6e06c8d6c02d8f242aac27073f4cdda668f0": "6d37cc9277c051a69dca33c38c7970a8",
".git/objects/5b/0afc5b53c3dc738fe7dc941b582b400c68c6f4": "a2fb7cc9acbd1b886229c3afc39c21fc",
".git/objects/08/b54524799ced206dc5c65d0c80559824cda6e1": "62b736436b9e45a442613f7804a5ce83",
".git/objects/6d/e6caffb111b3c7890802a75ffbb352a3a2fd91": "d68dbad0dbbbfdc5a55298129dcccc28",
".git/objects/06/aabc22e0ad2c90f7c28693dbcdfef392ea42d2": "a7c8010af545d73c20167212e7422a94",
".git/objects/6c/f58db4509749b9d80eba4e8fb79078ce1888bf": "5480da3bf2fb4138e8591a28b8717322",
".git/objects/6c/848e7423d67b730603f777365e62ec196915c4": "7ed7bf3f1a7678cab2a21fe8e7bc5adf",
".git/objects/6c/1f041bd14a22ad2641b43e99c2cf9b0f65c963": "1ff97195e5f0a7a2543025598fea20c4",
".git/objects/6c/5e59b923a280044feacb6f390eacb28430e47c": "abfddcae6c01666de7eafdcae07f4df3",
".git/objects/39/e016773c8cf4785ba3cf00bdd3ad9392949bd3": "7553a79c2ba58118402863c75f012efa",
".git/objects/55/ab2eff863730ae48e4920a1ba68c42c76bd5cb": "efdba217c02c32e0a2a6a353dca3e7ed",
".git/objects/55/e578837fc09103e6bf58adba2a06e86f4e8a52": "58c07f789d3e3abbbc592b9392b8829c",
".git/objects/64/22b8b10cdb3e21909d23e1ad62a0f6b71e3697": "3a4857ad9d7dd1b16fce332b4185815f",
".git/objects/64/524397bf88e85e9f3868a894e7be1230195a38": "917f6df824066670c658bab89b80fd8e",
".git/objects/d4/b1c48eeccb8bf872b9e263f910b1be50c3192d": "8cfe03f5ea3d1da5d68136c5952b46eb",
".git/objects/a0/4de9bed15969b07831b921983cdbe6556920bc": "de7fd798c38ea55f519b0f19d5a33c3a",
".git/objects/a0/17718d38f892829068448a8be0c51c1755062e": "2b1d52fc84133a19b32ed16aa3e2ac0d",
".git/objects/a7/dbf3a1241466c986de97219ba3d23730fa1bc6": "35a9d1f35280227c2dce582376185a6a",
".git/objects/b1/4cd4d79e934d586f8b9988bfce7f3ce1a55c8d": "581352023cc7e296aeb9bb8beef162fc",
".git/objects/b1/803c5fc292e495462200b1e5de9d57857905ac": "01c84a78da06350135a041ef7678e2bb",
".git/objects/b1/b2a640af4b57aaeef853121a8a260ab36df91c": "0eb7583c3ed2052773add83e7377365c",
".git/objects/dd/8710ae76eb27f011ad9cb0004d23d9fdfcdc2f": "138c28a3812fe3bf6f8417e60561e46b",
".git/objects/dc/57eb004d64b1725400426e9048a32b61db8001": "dccc75616ed5ffc6d88a4ad925393f19",
".git/objects/dc/a4eeaa6135c34a5bd433243abf917e37542ebb": "5d0fd52a0871db39889564b9a3f0d25b",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/d2/b34ba7ba56b98d4617f483f0016ca0c60f7821": "89c83d143a985555f5e31d38bb4946a9",
".git/objects/d2/a4e08fb03619f122a0d79401e9f45af5d3b42b": "5e022c9182147e5e0629c4175e66db99",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/4c85eddf9cdeca4fd7400c1d5d03f3d2cec100": "4f452ae7114e4cf947699d4591d81342",
".git/objects/db/39e5b6580a46763af9563ce5ddadadfcd79919": "4c2da48803bf541e46ee7a7ab4128ff9",
".git/objects/a8/4d1cac20ffb189d5d79f2222a4ca59e3e44f22": "b3a2499da6d58f9e38e0449dd2c2c30f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/217b19e676203f108aee3df2102047551e6ac7": "3726b570026ad33c272aca140ceb6997",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a603a5ba88a4a8d0a7d990082db54df5f46ab0": "9a516f21cc125ad7a5ef72e130c516f0",
".git/objects/a1/7cedc5aa82cdefc85e6347994ad43e99a4e6b2": "925963f168c854dcd82463f44be32ae2",
".git/objects/c3/db2186f46086c5da7bc05f73e98976d19b376f": "232fcbd71b0a325594614e2152594039",
".git/objects/c3/e237be9c6edac62d40b76c9103a8cb9829716f": "1841b53796cc8315e9b7162c782ae9a1",
".git/objects/c3/1decf184cd3a7000cfbbc26b8ddaea6b7a6044": "f90f8c0747b789d6fa5d9e45c4c788d8",
".git/objects/c4/67e16c905746a8e93c1e18ee28d714e607415d": "b4b84ab6babb270bdd29fe30292057fd",
".git/objects/ea/6ac1914158e399cf48feea54c6db2b3fdeb48f": "ad0dbb91af576c66e2333cea525c0804",
".git/objects/e1/902027a6adeb2993c21cd7314884e1fbac252d": "6c74f93cd3893010eb9357f9a9688e0b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e6/75c8f805ac827d60cf3e0fba8ba08412fe7a19": "bcd0ce4539a51a665067bd0a4c8fa6fd",
".git/objects/f9/c9f00f4107e3529900d7dd1b344f10b5381522": "889448e1f021a9740eb85cbbc3f78a6e",
".git/objects/f9/13d7ff5c7dd07e2fae871774485e72802c88cc": "3eeda5c6b9ca2986dfe940363cdfdb92",
".git/objects/f9/c0be37b08b40c08f2eff02577a64dfe439d6f7": "2b468703b5d3578c6896d382392cb1d4",
".git/objects/fa/5be6a17113b36574663c085402843989803624": "8bc784f8049f345491d372dc57abfebb",
".git/objects/fa/d8c00633b6dcb446206cf79c3ccec5c01c69d1": "3641f692613d26b96cad2d7c093d8b0f",
".git/objects/ff/f4bf0fdbb481bbd1d051f2218852dc47234ce1": "b5f197dbb95eb38c4f59fa7caede3dfb",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/245b10c88d44d53a928f936a77e14bbdce0c80": "6bc21b8f9f96b1baee47e2e6f9734972",
".git/objects/e7/a9a00d2bca65077420aa6637319463eab0822a": "e8e1dff84feee5c21437d0e51866c463",
".git/objects/f8/e27d83d198cca95d2ed3324c4c12a3dd0178ac": "3952ce2043bcace34bd1f209582962ed",
".git/objects/f8/59b55c7f29ea8483f260070dc081ae73e43e00": "8ffbbded2e150bdc5c745fa50bfe130f",
".git/objects/ce/81fb500bd9f2cc1f5f664152e92298b9149bbc": "6f7503199d52ad3e7129d039788d6798",
".git/objects/ce/6a46b0cc249545a14f2ca7958798a8f1c179de": "22bff0167882cad530d2baffcab5d7f1",
".git/objects/ce/86e720439a6d0b47036e820c1fd23be25cdf8e": "7740b07d5599951c96f348fed542dd07",
".git/objects/ce/2a09cb9bee1436d938a2ca277846a16e773666": "d318c8e50db430248580855767dc3279",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/5ba8b445609cb2546e090d0cf1f7c63dfd5c40": "9f6aa517e46ca01daf85a5659c94d89a",
".git/objects/2d/c52e7ca9d4cc4f99749cd218cd1d7c7dc6b45c": "6b7fffd5528b5659e3b46e95c3c23526",
".git/objects/77/1046d6ede77f6382e7097b03be6845558de990": "739d0ac1b3946cc1923fd0854a123e65",
".git/objects/70/7ca86ed3398a3114776f0c638b37b1f183a592": "1d94de97ce6db0424ae981d4adcca1c4",
".git/objects/4a/a79cc048578eae9fc36ab6e7095fbeb50fe8f2": "d14457576951a69f1efe538862bbf749",
".git/objects/4a/1892b15273f73a826f7464db643edda619f998": "bb8cdd3a7ae3c9e4021c60e52117d89e",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/b0cfa0fb0afb678ab8398d3c5860dd15455214": "fad3fc8bcb65eb919f563c48bb031c09",
".git/objects/8d/1dfbe949a933461a092e971c012599940d8838": "d4f2b77984da9a50e53177acc46acc35",
".git/objects/15/2681cfcb826732c69e8fe2b73c6af20ffebf04": "6b7ca2dcaae76845ab9cd9a91fa58e47",
".git/objects/12/719e7e955f69d2cc481da5995343116e9a427b": "473381fb7ec00ce18961652984ec0292",
".git/objects/85/afc39c94d9b34ce9e21b8f4119ff1a941bda79": "5c1d96d1d1a2ec8bbe39526bd60e64b9",
".git/objects/1d/ce688304d0b27c1e60cdc1aefa0a0af49a6e78": "e97e8554840dfcbe88b5a3e78906fc6c",
".git/objects/1d/8881680c2c7dd66486a90b68920af2d2de12de": "08128a061bf14e84d3bbfae6ddd306ea",
".git/objects/71/36e2cdd59c5bd0238bfc3855b1f37c9c3747ad": "571fea4694c5a933aa3d337233a38501",
".git/objects/71/0b11608ede8e43c417ed59609151990275949a": "209a03ff345e3298852507e8b7d752aa",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/11bdc83275d9587eee4f1cbbdd34949e910446": "d8c5ac19fbb0509d35d5a868615a5373",
".git/objects/40/f3d082af1a82c1c9e1dfde7887eb2cd8a629dd": "9fb803046d2462528e69e86920ab8317",
".git/objects/2e/ccf4920c234b2e570c437e6191a6e8a63242ed": "a65df87682f8c191d60dc4a66a1da0f8",
".git/objects/2b/ba0a42abbbb47189e74146802f326cccca7fc6": "588334a0320987eb9c5eca673a6b9737",
".git/objects/78/de9de5ececbc424f40e6b6195c448f1d934f5f": "60b0e734b062c34e695bcac7b9e2f70d",
".git/objects/8b/e57f49c8fa404d1f2aa5663ef6ec022ab57601": "9cb1063e397eb156cc6707a3d188e598",
".git/objects/8b/a098d1bd69cbc4f79879872b6ba223888c4c69": "2f5a4d82e94e4623bc3ecec6e896aec1",
".git/objects/13/b16138c74b5306af904324603466a947fce0f7": "a3bdaab5aa68ebba37b3e8ef9dab9777",
".git/objects/7f/39bcac511c8faa079facc71cb8f6e11c627f1e": "ef818b2b030de85e5197aaaf778be60d",
".git/objects/7f/ab7636e641e2ed6a440aa53eb6d0f81f5769cf": "7dc8eb48a152d465d4dca224f9c949c6",
".git/objects/14/f3671880b83df70c2e0a47b576da433aaf3ad9": "03758b612facf4a16ed4b551c1c9a7ad",
".git/objects/22/bc9c2904e284d5e0a5ee2892792a371e06637e": "d00a4053df64418b343245234330e828",
".git/objects/22/f85077e783dd2e097f98fb0adbf29daf0db067": "d81e5a60ca524347eb4c2e4508109c34",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc72bc8388099fd6c07d7ff84708b2fe",
".git/logs/refs/heads/master": "bc72bc8388099fd6c07d7ff84708b2fe",
".git/logs/refs/remotes/origin/master": "1f57bad7a9e9407cdb41ac999d31c5d0",
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
".git/refs/heads/master": "3f1504f56a2b6553af0a7c15133174d4",
".git/refs/remotes/origin/master": "3f1504f56a2b6553af0a7c15133174d4",
".git/index": "3bc746e7eb28b6d79e3297391901b7f1",
".git/COMMIT_EDITMSG": "d4524a42c6b3be986ed4f00c29304d73",
"assets/AssetManifest.json": "6a4a5d2ea7ec19b6b7c402d1e2c555b0",
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
"assets/assets/images/luvit.png": "d9888bd13550d4328da6c20da5536f61",
"assets/assets/images/Alexa.png": "09912198309c4009f09ad44b9f0e3d18",
"assets/assets/images/spl_xoay_goc.png": "4a55377d4cc3aecf2922c35bd5c1b934",
"assets/assets/images/dentha_sml.jpeg": "dee36e6470ff8c99a772275c013f16e2",
"assets/assets/images/downlight.png": "a6f3a752422eb693556743ae356950f7",
"assets/assets/images/5in1.png": "2baae4d9fceab71ec928ade13e1eb4d6",
"assets/assets/images/ct_rem_cuon.png": "cb55ca2660078c6d8c01ac3e2847d6e1",
"assets/assets/images/ct_rem_4_day.png": "bcb934076569c70feaa18d748a2139dd",
"assets/assets/images/ct_quat.png": "06dbd2082b945825dbfffdcb6014f496",
"assets/assets/images/ct_nguon_1_day.png": "5adc11b2d305267f08c22d529f26dd49",
"assets/assets/images/yale.jpeg": "af061e43d82c1f630b69814db8a8e408",
"assets/assets/images/ct_congsuatcao.png": "ab80c5174b170230df695105cab4ffad",
"assets/assets/images/daikin.png": "72850f56e506b00143f01d605039cb76",
"assets/assets/images/2in_2out.png": "0b6267888a4d0513bff704c68a4268e4",
"assets/assets/images/hc_1.5.png": "b86f72a08ad4c531048f0535994f0919",
"assets/assets/images/zigbee.png": "2ccff2c66ec7aea18e10bc0580d609cd",
"assets/assets/images/ct_rem_dtlm99.png": "4606fe50d35d266d1593218b922b139c",
"assets/assets/images/led_rgb.png": "955d2117448a0fc320b7103a9a0a1e3f",
"assets/assets/images/cong_tac_cam_ung.png": "221219085269afb8b9cbbcf2c4ee83d6",
"assets/assets/images/led_panel.png": "0e246f6cd4c5c4ce3fbc0a5b1be6fc98",
"assets/assets/images/cc_rem.png": "9f2b9529ca5023460da2192f0b00034d",
"assets/assets/images/repeater.png": "e64e20bec7b67c600f22260d266ef046",
"assets/assets/images/hc_3.0.png": "4aaafd996350927654dae3bdf23541d9",
"assets/assets/images/ct_cauthang_2in1.png": "8eba003aa08af7a384774a60bcbe4072",
"assets/assets/images/Bluetooth_Mesh.png": "a325684e4b704b7488425fdd4366fe09",
"assets/assets/images/ai_hub.png": "90575a7ab84c2db51ebf0d47f8456428",
"assets/assets/images/dtlm99.png": "e9b34aebdc6f66069df87b686549e89d",
"assets/assets/images/ir.png": "af18b34e3d642e648ace29d994a47e71",
"assets/assets/images/google_assistant.png": "11637fdefdd7c240890ba182ae2b4c33",
"assets/assets/images/LUMI_logo.png": "9dce4ce9d4c25a4d327366f552eadb90",
"assets/assets/images/ct_dimmer.png": "578fe2440b21cb28a442779128802cd2",
"assets/assets/images/module_input.png": "ad4361d35fea891d59feb818dcfd510d",
"assets/assets/images/ct_rem_3_day.png": "3414a5fad655a76fe81b0989a1cc2f94",
"assets/assets/images/module_rgb.png": "beb581fde590a6ee76cab6fbe7c30565",
"assets/assets/images/ct_camung.png": "7aeb7e4c1f14b4d43b96277a1821569c",
"assets/assets/images/loa_maika.jpeg": "81fb42d863e25de8d8583d06649ab272",
"assets/assets/images/mini_spl_xoay.png": "3c852a0b1b26b6c7650fee34ab445841",
"assets/assets/images/cb_cua.png": "1e5bd561a70a4f32f8dcfa28ba2fe580",
"assets/assets/images/mini_spl.png": "a9aa520bf24dbec29e839d05ffbccfe6",
"assets/assets/images/ma_v2.png": "eb27feb16aa63357e209353b4047da12",
"assets/assets/images/ma_v3.png": "58d4450361054bbac307fb6923d877cc",
"assets/assets/images/cb_chuyendong.png": "8b53da05c41e29a718a428268519dbf6",
"assets/assets/images/banner_lumi.png": "d0566a0c36f47be204e8733963cb0288",
"assets/assets/images/ct_cua_cuon.png": "2efb6074548372aa1ebcca7c743ae5d1",
"assets/assets/images/den_tuong_sml.jpeg": "d1e7d3df93e562847de1eb7efaa8acff",
"assets/assets/images/innoviti.png": "c641c9e0b87f8499e6164eaec91d7da7",
"assets/assets/images/dea.jpeg": "c2774a8ea25891cbe0a2eaea401eea0f",
"assets/assets/images/ct_cong.png": "9a8ce957fe25e45dde6e1740c8e64892",
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
