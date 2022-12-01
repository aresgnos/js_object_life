// this
const song = {
    name : 'song',
    first : 10,
    second : 20,
    sum : function() {
        return this.first+ this.second;
    }
}

// console.log('song.sum', song.sum(song.first, song.second));
console.log('song.sum', song.sum());