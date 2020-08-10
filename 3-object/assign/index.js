export default function addSerialNumber(source) {
  const { properties } = source;
  properties.status = 'processed';
  return Object.assign({}, source, {
    serialNumber: '12345',
    properties
  });
}
