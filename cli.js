const Githereum          = require('./githereum');

const neodoc = require('neodoc');

const help =

`Githereum

Usage:
  githereum <contract> push --from <address> <path> <tag>
  githereum <contract> clone <tag> <path>
  githereum <contract> pull <tag> <path>
  githereum <contract> head <tag>

Options:
  -f, --from <address>  Address of transaction sender
  -h, --help            Show this screen
  -v, --version         Show version
`;

let contractAddress, from, log;


async function push(path, tag) {
  let githereum = new Githereum(path, contractAddress, from, { log });
  await githereum.push(tag);
}

async function clone(tag, path) {
  let githereum = new Githereum(path, contractAddress, from, { log });
  await githereum.clone(tag);
}

async function pull(tag, path) {
  let githereum = new Githereum(path, contractAddress, from, { log });
  await githereum.pull(tag);
}

async function head(tag) {
  await Githereum.head(tag, contractAddress, { log });
}

module.exports = async function (done) {
  let argv;

  if (arguments.length > 1) {
    [, argv, log] = arguments;
  } else {
    argv = process.argv.slice(process.argv.indexOf('cli.js') + 1);
  // eslint-disable-next-line no-console
    log = console.log.bind(console);
  }


  const { version }  = require('./package.json');

  try {
    log(argv);
    const args = neodoc.run(help, { argv, version, smartOptions: true });

    contractAddress = args['<contract>'];
    from = args['--from'];

    log(args);

    if (args.push) {
      await push(args['<path>'], args['<tag>']);
    }

    if (args.clone) {
      await clone(args['<tag>'], args['<path>']);
    }

    if (args.pull) {
      await pull(args['<tag>'], args['<path>']);
    }

    if (args.head) {
      await head(args['<tag>']);
    }
  } catch(e) {
    done(e);
  }

  done();
};
