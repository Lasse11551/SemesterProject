import { fakerEN_IN } from "@faker-js/faker";


export default async function getMatches(numberOfMatches=5) {
    const promises = [];
    for (let i = 0; i <= numberOfMatches; i++) {
        const promise = fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        promises.push(promise)
    }
    
    const results = await Promise.all(promises);
    console.log(results);
    const matches = results.map((match) => ({ ...match, ...getIndiaProfile() })); //unit object - fletter match sammen med en profil
    return matches;
}

function getIndiaProfile() {
    return {
        name: fakerEN_IN.person.fullName(),
        bio: fakerEN_IN.person.bio(),
        streetAddress: fakerEN_IN.location.streetAddress(),
        city: fakerEN_IN.location.city()
    };
}