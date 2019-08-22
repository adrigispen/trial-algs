let bookedEvents = [
  {
    start: 1,
    end: 1.75
  },
  {
    start: 3.5,
    end: 5
  },
  {
    start: 10.25,
    end: 13
  }
];

let bookingRequest = [
  {
    start: 2.25,
    end: 3.75
  },
  {
    start: 10,
    end: 11
  },
  {
    start: 14,
    end: 20
  },
  {
    start: 6,
    end: 8.75
  }
];

let bookings = [
  [10, 12],
  [14.25, 16],
  [18.25, 19.75],
  [1.25, 2.5],
  [2.5, 4]
].map(el => ({ start: el[0], end: el[1] }));

// returns those bookings that CAN be scheduled
function requestToBook() {
  let booked = [...bookings];
  let requests = generateRequests(10, 2); // wanted to test a bit more - so I'm generating these, but they can overlap
  console.log("original bookings: ", bookings);
  console.log("randomly generated requests: ", requests);
  let results = [];
  // goes through requests - first one that can fit into the bookings is added.
  // requests.reduce(acc, cv) //change for loop to reduce
  for (let i = 0; i < requests.length; i++) {
    let request = requests[i];
    if (
      booked.reduce((acc, booking) => acc && !overlaps(request, booking), true)
    ) {
      booked.push(request);
      results.push(request);
    }
  }
  console.log("requests that could be filled: ", results);
  console.log("all bookings: ", booked.sort((a, b) => a.start - b.start));
  return results;
}

function overlaps(request, booking) {
  return (
    (request.start > booking.start && request.start < booking.end) ||
    (request.end > booking.start && request.end < booking.end)
  );
}

function generateRequests(count, duration) {
  let requests = [];
  for (let i = 0; i < count; i++) {
    let start = Math.random() * (24 - duration);
    let end = start + duration;
    requests.push({ start: start, end: end });
  }
  return requests;
}

export { requestToBook };
