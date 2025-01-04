var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


   function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function copy() {
  /* Get the text field */
  var copyText = document.getElementById("output2");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("Copy");

  /* Alert the copied text */
  alert("Copied: " + copyText.value);
}

// Opens a pop-up with twitter sharing dialog
function twitter() {
var url = "https://web.archive.org/web/20201210171729/http://ke1.nl/en/";
var text1 = document.getElementById("output2");
var text = text1.value;


window.open('https://web.archive.org/web/20201210171729/http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
}



}
/*
     FILE ARCHIVED ON 17:17:29 Dec 10, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:05:33 Mar 21, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 359.498
  exclusion.robots: 0.158
  exclusion.robots.policy: 0.147
  RedisCDXSource: 1.69
  esindex: 0.012
  LoadShardBlock: 339.703 (3)
  PetaboxLoader3.datanode: 322.793 (5)
  CDXLines.iter: 15.353 (3)
  PetaboxLoader3.resolve: 73.209 (3)
  load_resource: 251.821 (2)
*/