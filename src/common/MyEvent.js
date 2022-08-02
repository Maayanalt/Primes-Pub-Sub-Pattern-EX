class MyEvent {
  constructor() {
    this.events = {};
  }

  on(type, listener, ...args) {
    if (!this.events[type]) this.events[type] = [];
    this.events[type].push(listener.bind(this, ...args));
  }

  emit(type) {
    for (const listener of this.events[type]) {
      listener();
    }
  }
}

export default MyEvent;
