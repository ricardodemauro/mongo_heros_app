var Heros = require('./heros.controller');

module.exports = function(router) {
    router.post('/heros', Heros.createHero);
    router.get('/heros', Heros.getHeros);
    router.get('/heros/:id', Heros.getHero);
    router.put('/heros/:id', Heros.updateHero);
    router.delete('/heros/:id', Heros.removeHero);
}