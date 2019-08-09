# Githereum

[![Build Status](https://travis-ci.com/cardstack/githereum.svg?token=icdHtyWxYqeLi6vwJoV4&branch=master)](https://travis-ci.com/cardstack/githereum)

Githereum is a [Gitchain](https://github.com/gitchain/gitchain) implementation in [Ethereum](https://www.ethereum.org/). It allows you to create and manage decentralized git repositories.

## Installation

We recommend using `npm`, not yarn, to install this package. This package relies on ZOS ([OpenZeppelin](https://openzeppelin.com/sdk/)), which relies on `npm`.

To install this project locally, execute:
1. `git clone <repository url>`
2. `cd githereum`
3. `npm install`


## Usage

After deploying the contract, this is how to use the CLI.

In the examples below, `<contract>` is the
address of the contract you deployed, `<path>` is the local path to your git repo,
and `<tag>` is the name of the tag to push to or clone from.

```
Githereum

Usage:
  npx truffle exec cli.js <contract> register --from <address> <repo>
  npx truffle exec cli.js <contract> push --from <address> <path> <repo:tag>
  npx truffle exec cli.js <contract> clone <repo:tag> <path>
  npx truffle exec cli.js <contract> pull <repo:tag> <path>
  npx truffle exec cli.js <contract> head <repo:tag>
  npx truffle exec cli.js <contract> add owner --from <address> <repo> <owner>
  npx truffle exec cli.js <contract> remove owner --from <address> <repo> <owner>
  npx truffle exec cli.js <contract> add writer --from <address> <repo> <writer>
  npx truffle exec cli.js <contract> remove writer --from <address> <repo> <writer>

Options:
  -f, --from <address>  Address of transaction sender
  -h, --help            Show this screen
  -v, --version         Show version
```

## Testing
1. From the command line execute: `npm run build`. This will clear the `build/` folder and re-generate the ZOS proxy contracts.
2. Then run `truffle dev`. This spawns a private blockchain and displays the truffle console. Wait for the prompt to appear.
3. Back in the first terminal window that you ran `truffle dev` from, enter the command `test` in the truffle console. This will compile your contracts and run the tests.

You can just leave the truffle console running, and enter `test` from the truffle console in order to re-run your tests. Note that you should re-run `truffle build` (in a different terminal) anytime you make a modification to a ZOS contract's implementation in order to redeploy the proxy contract that wraps the implementation contract you modified.

To get a debugger console, you can use `npx -n "--inspect-brk" truffle test` in a different terminal to run with the node debugger.

