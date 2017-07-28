/**
 * Created by maksim on 7/18/17.
 */
"use strict";
var log4js = require('log4js');
var logger = log4js.getLogger('Socket');
var peerListener = require('../lib-fabric/peer-listener.js');
var tools = require('../lib/tools');

var hfc = require('../lib-fabric/hfc');
var networkConfig = hfc.getConfigSetting('network-config');

// config
var config = require('../config.json');
const USERNAME = config.user.username;

module.exports = {
  init: init
};

/**
 * @param {SocketIO} io
 * @param {object} options
 */
function init(io, options){
  var ORG = options.org;

  var PEERS = Object.keys(networkConfig[ORG]).filter(k=>k.startsWith('peer'));
  var peersAddress = PEERS.map(p=>tools.getHost(networkConfig[ORG][p].requests));

  // log connections
  io.on('connection', function(socket){
    logger.debug('a new user connected:', socket.id);
    socket.on('disconnect', function(/*socket*/){
      logger.debug('user disconnected:', socket.id);
    });
  });

  // emit block appearance
  var lastBlock = null;
  //TODO: listen all peers, remove duplicates
  peerListener.listenPeers([peersAddress[0]], USERNAME, ORG, function(block){
    // emit globally
    lastBlock = block;
    io.emit('chainblock', block);
  });
  io.on('connection', function(socket){
    if(lastBlock){
      socket.emit('chainblock', lastBlock);
    }
  });


  // setInterval(function(){
  //   socket.emit('ping', Date.now() );
  // }, 5000);
}
