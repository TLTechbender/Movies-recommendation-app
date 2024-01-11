/**
 * Testing some of my code here
 */
const movie = {
    id1: {
        id: "id1",
        firstname: "firstname1",
        lastname: "lastname1"
    },
    id2: {
        id: "id2",
        firstaame: "firstname2",
        lastname: "lastname2"
    }
};

check(movie);
function check({id1: movielist}){
    console.log(movielist);
}
