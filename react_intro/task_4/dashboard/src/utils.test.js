const { getFullYear, getFooterCopy, getLatestNotification } = require('./utils.js');

test('getFullYear should return the correct year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
})

test('getFooterCopy should return the correct string when falsey', () => {
  const isIndex = false
  const footerCopy = getFooterCopy(isIndex);
  expect(footerCopy).toBe("Holberton School main dashboard");
})

test('getFooterCopy should return the correct string when truey', () => {
  const isIndex = true
  const footerCopy = getFooterCopy(isIndex);
  expect(footerCopy).toBe("Holberton School");
})

test('getLatestNotification should return the correct string', () => {
  const latestNotification = getLatestNotification();
  expect(latestNotification).toBe("<strong>Urgent requirement</strong> - complete by EOD")
})
