MediaPlayer.dependencies.VBR = function () {
    "use strict";

	var size_video1 = [1680951,1637558,1371111,1684293,1400042,1792609,1213669,1191552,1888982,1381292,1593129,1384566,1918298,1605664,1356382,1278860,1580165,1315506,1642869,928190,1416000,865548,1284104,1692271,1504744,1484004,1405086,891371,1401736,1743545,1084561,1099310,1789869,1675658,1636106,1492615,1200522,1787763,1690817,1459339,1250444,1691788,1403315,1732710,1270067,1514363,1615320,1507682,1260622,1784654,1352160,1115913,1637646,1546975,1637443,1475444,1616179,1113960,466635,1727956,1316739,1373312,458410,320487,573826],
	size_video2 = [1184008,1123706,854424,1150093,902304,1237428,763515,840707,1279590,930828,996858,950867,1285933,1049248,984261,876058,1054391,875132,996451,660126,1032091,626844,949274,1197901,1001670,994288,925341,623084,977347,1184694,766276,834528,1285071,1017030,1080835,1078945,788728,1165402,1123991,937434,804808,1178153,922947,1175468,903392,970351,1094905,931644,854957,1179875,978233,794797,1073857,942081,1074761,1033448,1181202,660582,297985,1188866,910001,974311,314327,221329,445973],
	size_video3 = [604139,577615,418531,555427,469238,614632,393715,428426,594788,527047,460827,500774,621760,556545,476734,417508,552639,462442,552256,303234,522859,337637,471941,598737,560588,487684,479873,284277,564825,546935,394056,442514,610493,523364,574457,499175,412705,586327,560284,476697,408166,570011,502061,569274,444948,507586,525450,541979,391886,539537,506089,408110,515570,462132,574826,523754,572621,344553,157240,610010,460871,480012,169331,126490,236234],
	size_video4 = [361158,370284,246858,357922,264156,371586,241808,270621,327839,334864,313171,253682,348331,319047,311275,282933,308899,289234,307870,207573,354546,208087,305510,364291,331480,298846,298034,195290,327636,354076,261457,272419,344053,307537,344697,301834,261403,332467,324205,276260,260969,357539,301214,320538,292593,290952,325914,285965,266844,327707,308757,271734,313780,284833,295589,331270,307411,224531,94934,385537,306688,310705,95847,78651,162260],
	size_video5 = [207189,219272,134208,204651,164461,230942,136746,150366,193697,193362,189146,153391,195591,177177,190923,155030,185660,164741,179442,131632,198676,115285,148044,181978,200708,177663,176815,109489,203211,196841,161524,151656,182521,172804,211407,171710,170866,178753,175461,184494,154382,206330,175870,178679,173567,172998,189473,172737,163181,181882,186151,164281,172026,173011,162488,201781,176856,137099,57015,234214,172494,184405,61936,43268,81580];

return {
        debug: undefined,

	getChunkSize: function (index, quality) {
		if (index < 0 || index >64) {
			return 0;
		}
		var chunkSize;
		switch (quality) {
			case 4:
				chunkSize = size_video1[index];
				break;
			case 3:
				chunkSize = size_video2[index];
				break;
			case 2:
				chunkSize = size_video3[index];
				break;
			case 1:
				chunkSize = size_video4[index];
				break;
			case 0:
				chunkSize = size_video5[index];
				break;
			default:
				chunkSize = 0;
				break;
		}
            	return chunkSize;
        }
    };
};

MediaPlayer.dependencies.VBR.prototype = {
    constructor: MediaPlayer.dependencies.VBR
};