async function getHeroNames() {
    try {
        const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
        const heroes = await response.json();

        heroes.forEach(hero => {
            console.log(hero.name);
        });
    } catch (err) {
        console.error(err);
    }
}

getHeroNames();