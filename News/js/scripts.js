'use strict';
// JQuery "document ready" function
$(function() {
	
  function onInit() {
    renderNavMenu();
    renderPopPosts();
    archivesItemsPosts();
    categoriesItemsPosts();
    pagesPosts();
    metaItemsPosts();
    blogrollItemsPosts();
    newsBlockOne();
    newsBlockResent();
  }

  function renderNavMenu() {
    // <nav class="menu" id="navMenu"></nav>
    var nav = $('#navMenu');
		for (var i = 0; i < headerNavItems.length; i++) {
      nav.append('<a href="' + headerNavItems[i].href + '">' + headerNavItems[i].name + '</a>');
    }
  }
  
function renderPopPosts() {
var popular = $('#pop');
	for (var i = 0; i < popPostItems.length; i++) {
	popular.append('<li><a href="' + popPostItems[i].href + '">' + popPostItems[i].name + '</a></li>');
	}
}
  
function categoriesItemsPosts() {
	var categ = $('#categories');
	for (var i = 0; i < archivesItems.length; i++) {
	categ.append('<li><a href="' + categoriesItems[i].href + '">' + categoriesItems[i].name + '</a></li>');
	}
}

function archivesItemsPosts() {
	var arch = $('#archive');
	for (var i = 0; i < archivesItems.length; i++) {
	arch.append('<li><a href="' + archivesItems[i].href + '">' + archivesItems[i].name + '</a></li>');
	}
}

function pagesPosts() {
var page = $('#pages');
	for (var i = 0; i < pageItems.length; i++) {
	page.append('<li><a href="' + pageItems[i].href + '">' + pageItems[i].name + '</a></li>');
	}
}

function metaItemsPosts() {
var meta = $('#META');
	for (var i = 0; i < metaItems.length; i++) {
	meta.append('<li><a href="' + metaItems[i].href + '">' + metaItems[i].name + '</a></li>');
	}
}

function blogrollItemsPosts() {
var blog = $('#blogroll');
	for (var i = 0; i < blogrollItems.length; i++) {
	blog.append('<li><a href="' + blogrollItems[i].href + '">' + blogrollItems[i].name + '</a></li>');
	}
}

function newsBlockOne() {
	var newsvar = $('#forNews');
	for(var i = 0; i<blockOneData.length-1; i++)
	{
		// news.append('<h6 class="resent">' + blockOneData[i].date + '</h6>' + '<h3>' + blockOneData[i].headerText + '</h3>' + '<img src="'+ blockOneData[i].image + '>' + '<p>' + blockOneData[i].text + '</p>')
		 newsvar.append(
	        '<div class="block2" id="otherNews' + blockOneData[i].id + '">' +
	        	'<h6 class="resent">' + blockOneData[i].date + '</h6>' +
	        	'<h3>' + blockOneData[i].headerText + '</h3>' + 
	        	'<img src="' + blockOneData[i].image +'">' +
	        	'<p>' + blockOneData[i].text + '</p>' +
	        	'<button>Read More</button>' +
	        	'<button>Comments</button>' +
	        '</div>');
	}

}

function newsBlockResent() {
	var newsRes = $('#bigNews');
		 newsRes.append(
	        
	        	'<h6 class="resent">' + blockOneData[4].date + '</h6>' +
	        	'<h3>' + blockOneData[4].headerText + '</h3>' + 
	        	'<p>' + blockOneData[4].text1 + '</p>' + 
	        	'<img src="' + blockOneData[4].image +'">' +
	        	'<p>' + blockOneData[4].text + '</p>'
	        	);}

 onInit();
});


	// <h6 class="resent">Saturday, November 29, 2008 10:16</h6>
	// <h3>Hello, I’m Lorem ipsum dolor sit amet, conseur adipiscing elit puella magna est.</h3>
	// <img src="img/1.png">
	// <p>Etiam sem eros, interdum at rutrum et, hendrerit id nisi. Etiam iaculis lorem eget arcu gravida lacinia. Fringilla justo ullamcorper ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Raesent sem elit, volutpat id vulputate faucibus, fringilla vel massa. Proin nec mi a mi tincidunt elementum sed vel ipsum.</p>
	// <button>Read More</button>
	// <button>Comments</button>

 // var otherNews = $('#otherNews');
	// 	for (var i = 0; i < allNews.length; i++) {
 //      otherNews.append(
 //        '<div class="block2" id="otherNews' + allNews[i].id + '">' +
 //        	'<h6 class="resent">' + allNews[i].title + '</h6>' +
 //        	'<h3>' + allNews[i].shortDesription + '</h3>' +
 //        	'<p>' + allNews[i].fullDescription + '</p>' +
 //        	'<button>Read More</button>' +
 //        	'<button>Comments</button>' +
 //        '</div>'
 //      );
 //    }