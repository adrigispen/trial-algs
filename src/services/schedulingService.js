function generateEventTimes() {
  let a = Math.random();
  let b = Math.random();
  let eventTimes = [a, b].sort();
  let eventLength = eventTimes[1] - eventTimes[0];
  //console.log(eventLength, eventTimes);
}

export { generateEventTimes };
