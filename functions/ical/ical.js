const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  try {
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Disposition": "attachment",
        filename: "dupa.ical",
      },
      body: `BEGIN:VCALENDAR
BEGIN:VEVENT
DTSTART:20200929T17000Z
SUMMARY:Spotkanie z Katarzyną Bereniką Miszczuk [online]
DESCRIPTION:Zapraszamy na spotkanie z popularną autorką, Katarzyną Bereniką Miszczuk. Wydarzenie w formie live’a na Facebooku biblioteki: https://www.facebook.com/MiejskaBibliotekaPublicznaWSzczecinie
LOCATION:ProMedia
END:VEVENT
END:VCALENDAR`,
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};
