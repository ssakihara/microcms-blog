import moment from 'moment-timezone'
export function formatDate(date) {
  return moment.utc(date).format('Y/M/D')
}
