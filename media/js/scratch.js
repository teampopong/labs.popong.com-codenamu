render_status = {
    "ul-park":0,
    "ul-ahn":0,
    "ul-moon":0,
    "ul-kim":0,
    "mashup":0
};

status_items = {
    "ul-park":[],
    "ul-ahn":[],
    "ul-moon":[],
    "ul-kim":[],
    "mashup":[]
};


var date_sort_asc = function (item1, item2) {
  if (item1.date > item2.date) return -1;
  if (item1.date < item2.date) return 1;
  return 0;
};

function zero_padding(ss) {
    if (ss < 10)
	return '0' + ss;
    return ss;
}

function format_date(dd) {
    return dd.getFullYear() + "-" + 
	zero_padding(dd.getMonth()+1) + "-" + 
	zero_padding(dd.getDate()) + " " +  
	zero_padding(dd.getHours()) + ":" + 
	zero_padding(dd.getMinutes()) + ":" +
	zero_padding(dd.getSeconds());
}

function render(key) {
    render_status[key] += 1;
	var _html = ""; 
	// for (var i = 0 ; i < status_items[key].length; ++i) {
	// 	_html += status_items[key][i].html;
	// }
	status_items[key] = status_items[key].sort(date_sort_asc);
	for (var i = 0 ; i < status_items[key].length; ++i) {
	    if (typeof (status_items[key][i].html) != "undefined")
		_html += status_items[key][i].html;
	}
        status_items[key] = [];
	$("ul#" + key).append(_html);
}

function fill_content(qry, place) {
    var search_url = 'http://apis.daum.net/search/image?apikey=a80c85668a5cfa78ec441d59305b5224e9691601&result=20&output=json&q=';
    var url = search_url + qry;
    $.getJSON(url + "&callback=?", function(obj) {
	var results = document.getElementById(place);
	var _items = obj.channel.item;
	for (var i = 0; i < _items.length; ++i) {
	    var item = _items[i];
	    if(i==0) {
		$("#person-profile_image").attr('src',item.thumbnail); 
	    }
	    var _date = new Date(parse_image_date(item.pubDate));
	    item.pubDate = format_date(_date);
	    var _tmp = tmpl("item_tmpl_single", item);
//	    console.log(_tmp);
	    var _output = {"html":_tmp,
			   "date":_date};
	    status_items[place].push(_output);
	}
	render(place);
    });
    fill_rss_content(qry, place);
}

function parse_image_date(date_string) {
    var year = date_string.substring(0, 4);
    var month = date_string.substring(4, 6);
    var day = date_string.substring(6, 8);
    var hour = date_string.substring(8, 10);
    var min = date_string.substring(10, 12);
    var sec = date_string.substring(12, 14);

    var full = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
    return new Date(full);
}

function fill_rss_image_content(name, place) {
    var _url = "http://openapi.naver.com/search?key=c5b50d1e4781c404b182cb96d0e6cbbf&sort=date&target=image&start=1&display=10&query=" + name;
    $('#rssResult').rssfeed(_url, {
        limit: 20,
        process: function(e, data, options) {
           var items = [];
           for (var i=0; i < data.feed.entries.length; ++i) {
    	       var _content = stripHTML(data.feed.entries[i].content);
               var _title = stripHTML(data.feed.entries[i].title);
               var _link =  data.feed.entries[i].link;
               var _pubdate = data.feed.entries[i].publishedDate;
	       
	       var _date = new Date(_pubdate);

	       var _pubDate = format_date(_date);
    	       var obj = {"link":_link,
    	       		  "title":_title,
    	       		  "content":_content,
			  "pubdate":_pubDate};

	       var _tmp = tmpl("item_tmpl_rss_single", obj);
	       var _date = new Date(_pubdate);
	       var _output = {"html":_tmp,
			      "date":_date};
	       status_items[place].push(_output);
	       items.push(obj);
           }
      	   var results = document.getElementById(place);
           var _tmp = tmpl("item_tmpl_rss", items);
           render(place);
        }});
}

function fill_rss_content(name, place) {
    var _url = 'http://openapi.naver.com/search?key=c5b50d1e4781c404b182cb96d0e6cbbf&sort=date&target=news&start=1&display=10&query=' + name;
    $('#rssResult').rssfeed(_url, {
        limit: 20,
        process: function(e, data, options) {
           var items = [];
           for (var i=0; i < data.feed.entries.length; ++i) {
    	       var _content = stripHTML(data.feed.entries[i].content);
               var _title = stripHTML(data.feed.entries[i].title);
               var _link =  data.feed.entries[i].link;
               var _pubdate = data.feed.entries[i].publishedDate;
	       
	       var _date = new Date(_pubdate);

	       var _pubDate = format_date(_date);
    	       var obj = {"link":_link,
    	       		  "title":_title,
    	       		  "content":_content,
			  "pubdate":_pubDate};

	       var _tmp = tmpl("item_tmpl_rss_single", obj);
	       var _date = new Date(_pubdate);
	       console.log(_date);
	       var _output = {"html":_tmp,
			      "date":_date};
	       status_items[place].push(_output);
	       items.push(obj);
           }
      	   var results = document.getElementById(place);
           var _tmp = tmpl("item_tmpl_rss", items);
           render(place);
        }});
}

$(document).ready(function() {
    fill_content("박근혜", "ul-park");
    fill_content("안철수", "ul-ahn");
    fill_content("문재인", "ul-moon");
    fill_content("김두관", "ul-kim");


});
