const format = require("date-fns/format");
const parse = require("date-fns/parse");

const formatToISO = (date) => {
  const parsed = parse(date, "yyyy-MM-dd HH:mm:ss", new Date());
  const dateFormatted = format(parsed, "yyyyMMdd");
  const timeFormatted = format(parsed, "HHmm");
  const withZSuffix = `${dateFormatted.toString()}T${timeFormatted}0Z`;
  return withZSuffix;
};

module.exports = { formatToISO };
