const LOKI_DEFAULT_COSTUME = 'loki';
const adversary = 'Thor';

const LOKI_COSTUME = {
    IronMan: 'Magneto',
    Thor: 'odin',
    Hulk: 'thanos'
}

const result = LOKI_COSTUME[adversary] || LOKI_DEFAULT_COSTUME;
console.log(result);