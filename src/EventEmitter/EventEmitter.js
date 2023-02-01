class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    !this.events[eventName] && (this.events[eventName] = []);
    callback.forEach((item) => this.events[eventName].push(item));
  }

  unsubscribe(eventName, callback) {
    this.events[eventName] = this.events[eventName].filter((eventCallback) => callback !== eventCallback);
  }

  emit(eventName, args) {
    const event = this.events[eventName];
    event && event.forEach((callback, index) => callback.call(null, args[index]));
  }
}

export const emitter = new EventEmitter();
