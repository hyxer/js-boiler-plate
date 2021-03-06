'use strict';
const project = require('./project');
const upload = require('./upload');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(upload);
  app.configure(project);
};
