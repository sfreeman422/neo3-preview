import moment from 'moment'

export const convertMilliseconds = ms => {
  return `${new Date(ms).getUTCSeconds()} seconds`
}

export const formatTime = time => moment(time).format('MM-DD-YYYY | HH:mm:ss')

export const convertMillisecondsToSeconds = millis => Math.floor(millis / 1000)
