// test data + generator
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

function generateRequests(count, duration) {
  let requests = [];
  for (let i = 0; i < count; i++) {
    let start = Math.random() * (24 - duration);
    let end = start + duration;
    requests.push({ start: start, end: end });
  }
  return requests;
}

// functions
// returns all bookings that fit on the schedule
function requestToBook() {
  let booked = [...bookings];
  let requests = generateRequests(10, 4); // wanted to test a bit more - so I'm generating these, but they can overlap
  console.log("original bookings: ", bookings);
  console.log("randomly generated requests: ", requests);
  let allBookings = requests
    .reduce((results, request) => {
      if (
        booked.reduce((acc, booking) => acc && !overlap(request, booking), true)
      ) {
        results.push(request);
      }
      return results;
    }, booked)
    .sort((a, b) => a.start - b.start);
  console.log("all bookings: ", allBookings);
  return allBookings;
}

// this still doesn't account for all cases; what if they're exactly equal, what if the start or end time is exactly the same... probably also other cases. Just added the two cases to check if request is fully contained within booking or vice versa
function overlap(request, booking) {
  return (
    (request.start > booking.start && request.start < booking.end) ||
    (request.end > booking.start && request.end < booking.end) ||
    (request.start < booking.start && request.end > booking.end) ||
    (booking.start < request.start && booking.end > request.end)
  );
}

export { requestToBook };
