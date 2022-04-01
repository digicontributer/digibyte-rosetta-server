const { RPCClient } = require('rpc-bitcoin');
const Bluebird = require('bluebird');
const Config = require('../config');

const rpcConfig = {
  user: Config.rpc.rpc_user,
  pass: Config.rpc.rpc_pass,
  url: `${Config.rpc.rpc_proto}://${Config.rpc.rpc_host}`,
  port: Config.rpc.rpc_port,
  timeout: 0,
};

const rpc = new RPCClient(rpcConfig);
Bluebird.promisifyAll(rpc);

module.exports = rpc;
