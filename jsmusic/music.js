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
        var sequence = notes[a] + notes[b] + notes[c] + notes[d] + notes[e] + notes[f] + notes[g] + notes[h];
        out.innerText = sequence;
}
window.onload = init;
