class MyEvent {
  constructor() {
    this.events = {};
  }

  on(type, listener) {
    if (!this.events[type]) this.events[type] = [];
    this.events[type].push(listener);
  }

  emit(type, ...args) {
    for (const listener of this.events[type]) {
      listener(...args);
    }
  }
}

export default MyEvent;
