//music.js 
//Written by Stephen Ritchie
function init(){
        var out = document.getElementById('out');
        var notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        var a = Math.floor(Math.random() * notes.length);
        var b = Math.floor(Math.random() * notes.length);
        var c = Math.floor(Math.random() * notes.length);
        var d = Math.floor(Math.random() * notes.length);
        var e = Math.floor(Math.random() * notes.length);
        var f = Math.floor(Math.random() * notes.length);
        var g = Math.floor(Math.random() * notes.length);
        var h = Math.floor(Math.random() * notes.length);
        var i = Math.floor(Math.random() * notes.length);
        var j = Math.floor(Math.random() * notes.length);
        var k = Math.floor(Math.random() * notes.length);
        var l = Math.floor(Math.random() * notes.length);
        var m = Math.floor(Math.random() * notes.length);
        var n = Math.floor(Math.random() * notes.length);
        var o = Math.floor(Math.random() * notes.length);
        var p = Math.floor(Math.random() * notes.length);
        var sequence = notes[a] + notes[b] + notes[c] + notes[d] + notes[e] + notes[f] + notes[g] + notes[h] + notes[i] + notes[j] + notes[k] + notes[l] + notes[m] + notes[n] + notes[o] + notes[p];
        out.innerText = sequence;
}
window.onload = init;
