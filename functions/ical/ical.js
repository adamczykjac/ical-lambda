const fetch = require("node-fetch");
const date = require("./helpers/date");

const API_URL = "https://wiadomosci.szczecin.eu/eventapi";

exports.handler = async function (event, _) {
  try {
    const response = await fetch(
      `${API_URL}/${event.queryStringParameters.category}/${event.queryStringParameters.slug}`,
      {
        Content: "application/json",
      }
    );
    const data = await response.json();
    const eventData = data.post;

    return {
      statusCode: 200,
      headers: {
        "Content-Disposition": `attachment; filename="${event.queryStringParameters.slug}.ics"`,
      },
      body: `BEGIN:VCALENDAR
BEGIN:VEVENT
DTSTART:${date.formatToISO(eventData["event_start"])}
${
  eventData["event_end"]
    ? `DTEND:${date.formatToISO(eventData["event_end"])}`
    : ""
}
SUMMARY:${eventData.title}
DESCRIPTION:${eventData.teaser}
LOCATION:${eventData.address}
END:VEVENT
END:VCALENDAR`,
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
