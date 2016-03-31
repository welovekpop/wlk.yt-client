import find from 'array-find';

const debug = require('debug')('uwave:chat-commands');

const commands = {};

export function getCommands() {
  return commands;
}

export function register(name, description, { action, guard }) {
  commands[name] = { description, action, guard };
}

export function canExecute(state, { guard } = {}) {
  return guard ? guard(state) : true;
}

export function execute(state, name, args = []) {
  debug('execute', name, args);
  if (commands[name]) {
    const allowed = canExecute(state, commands[name]);
    debug('canExecute', allowed);
    if (allowed) {
      return commands[name].action(...args);
    }
  }
}

// Helper to consistently find online users in command handlers.
export function findUser(users, username) {
  const lname = username.toLowerCase();
  return find(users, o => o.username.toLowerCase() === lname);
}
