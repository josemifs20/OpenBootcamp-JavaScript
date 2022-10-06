const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});


function error() {
    if(false) {
        console.info("Bien");
    } else {
        throw new Error("Este es un error custom");
    }
}

try {
	error();
} catch(err) {
  logger.log("error", err.toString());
  //console.error(err);
  logger.error(err.toString());
}
