var hoverEffect = true; // set true for hover effect, set false for no hover effect

var searchEngine = 'baidu'; // default search engine - set google for google search, bing for bing search, yahoo for yahoo search

var numberOfScreens = 3; // set number of screens (1 or 2 or 3)
 
var blockName = new Array(); // set names of blocks
blockName[1] = '代码利器';
blockName[2] = '相关推荐';
blockName[3] = '热门话题';

var bookmark = new Array();
bookmark[0] = new Array();
bookmark[1] = new Array();
bookmark[2] = new Array();

// set your bookmarks here: (If you do not fill 'thumb' for thumbnail will be used title)
// FIRST BLOCK
bookmark[0][0] = {
	'title':'CodeMirror 在线代码高亮',
	'url':'http://developer.51cto.com/art/201205/337525.htm',
	'thumb': 'o1.png'
};
bookmark[0][1] = {
	'title':'EclipseColorer Eclipse的语法着色插件',
	'url':'http://developer.51cto.com/art/201205/337526.htm',
	'thumb': 'o2.png'
};

bookmark[0][2] = {
	'title':'GeSHi 1.0.8.10版本 HTML代码高亮库',
	'url':'http://developer.51cto.com/art/201205/337527.htm',
	'thumb': 'o3.png'
};
bookmark[0][3] = {
	'title':'Highlight 3.9发布 语法着色工具',
	'url':'http://developer.51cto.com/art/201205/337529.htm',
	'thumb': 'o4.png'
};

bookmark[0][4] = {
	'title':'SyntaxHighlighter JavaScript语法着色库',
	'url':'http://developer.51cto.com/art/201205/337528.htm',
	'thumb': 'o5.png'
};
bookmark[0][5] = {
	'title':'jQuery语法高亮插件 DlHighlight',
	'url':'http://developer.51cto.com/art/201205/337531.htm',
	'thumb': 'o6.png'
};
bookmark[0][6] = {
	'title':'GNU Source-highlight 3.1.6发布',
	'url':'http://developer.51cto.com/art/201205/337530.htm',
	'thumb': 'o7.png'
};
bookmark[0][7] = {
	'title':'Highlight.js 语法高亮',
	'url':'http://developer.51cto.com/art/201205/337532.htm',
	'thumb': 'o8.png'
};
bookmark[0][8] = {
	'title':'Colorer Take Eclipse的语法着色插件',
	'url':'http://developer.51cto.com/art/201205/337533.htm',
	'thumb': 'o9.png'
};

bookmark[0][9] = {
	'title':'Google Code Prettify 页面语法高亮JS库',
	'url':'http://developer.51cto.com/art/201205/337534.htm',
	'thumb': 'o10.png'
};
bookmark[0][10] = {
	'title':'Source Insight利器',
	'url':'http://developer.51cto.com/art/201204/327479.htm',
	'thumb': 'o11.png'
};
bookmark[0][11] = {
	'title':'ssssss',
	'url':'http://www.s.com/',
	'thumb':''
};
// end of FIRST BLOCK
// SECOND BLOCK
bookmark[1][0] = {
	'title':'Java灵活开发 语言混合编程',
	'url':'http://developer.51cto.com/art/201205/337214.htm',
	'thumb': 'z1.png'
};
bookmark[1][1] = {
	'title':'Visual Studio 11应用开发指南',
	'url':'http://developer.51cto.com/art/201205/335275.htm',
	'thumb': 'z2.png'
};
bookmark[1][2] = {
	'title':'JVM编程语言，你的选择？',
	'url':'http://developer.51cto.com/art/201205/334561.htm',
	'thumb': 'z3.png'
};
bookmark[1][3] = {
	'title':'程序员们眼中的Java',
	'url':'http://developer.51cto.com/art/201204/329335.htm',
	'thumb': 'z4.png'
};
bookmark[1][4] = {
	'title':'Java开源工具汇总,一个都不能少！',
	'url':'http://developer.51cto.com/art/201203/322895.htm',
	'thumb': 'z5.png'
};
bookmark[1][5] = {
	'title':'宅男程序员给老婆的计算机课程',
	'url':'http://developer.51cto.com/art/201203/321936.htm',
	'thumb': 'z6.png'
};
//end of SECOND BLOCK
// THIRD BLOCK