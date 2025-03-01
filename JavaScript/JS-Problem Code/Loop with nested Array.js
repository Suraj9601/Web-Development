let heroes = [ ["ironman", "spiderman", "thor"], [ "superman", "wonder women", "flash"]];

for(let i=0; i < heroes.length; i++) {
    console.log(i,heroes[i]);
    for(let j=0; j<heroes[i].length; j++) {
        console.log(j, heroes[i][j]);
    }
}