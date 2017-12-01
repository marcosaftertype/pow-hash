# PoW Hash #

## Game-a-Thon Hashcash Proof of Work Algorithm

### Installation
- Node 8.9.1 is needed
- Install it globally with `npm i -g pow-hash`

### Usage
Just to `pow-hash -m [message to hash] -d [difficulty]`

e.g: `pow-hash -m Hello,\ world\! -d 3`
Outputs:
```
Time: 105.425ms
Message: Hello, world!
Difficulty: 3
PoW Hash: 0004b5ec0e58569b916cd0e55b1253e2da19e8cf4d291108f8146c0ad5bd3810
Nonce: 4174
```
