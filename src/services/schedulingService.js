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

// returns those bookings that CAN be scheduled
function requestToBook() {
  let booked = bookedEvents;
  let requests = bookingRequest;
  let results = [];
  for (let i = 0; i < requests.length; i++) {
    let request = requests[i];
    if (
      booked.reduce((acc, booking) => acc && !overlaps(request, booking), true)
    )
      results.push(request);
  }
  console.log(results);
  return results;
}

function overlaps(request, booking) {
  return (
    (request.start > booking.start && request.start < booking.end) ||
    (request.end > booking.start && request.end < booking.end)
  );
}

export { requestToBook };
