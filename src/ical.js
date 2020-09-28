"use strict";

function getIcalEvent(event) {
  return {};
}

async function getEvent(id) {
  // TODO get event from api
}

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Disposition": "attachment",
      filename: "dupa.ical",
    },
    body: JSON.stringify({ foo: "bar" }),
  });
};
