import { v4 as uuidv4 } from 'uuid';

let existingUuids = [];

export default function generateUuid() {
  let newUuid = `uuid_${uuidv4()}`;
  if (existingUuids.includes(newUuid)) {
    generateUuid();
  } else {
    existingUuids.push(newUuid);
  }
  return newUuid;
}