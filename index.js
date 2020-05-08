var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];


for (var x = 0; x < pronoun.length; x++) {

    for (var y = 0; y < adj.length; y++) {

        for (var z = 0; z < noun.length; z++) {

            console.log(pronoun[x] + "" + adj[y] + "" + noun[z] + ".com")
        }
    }
}

