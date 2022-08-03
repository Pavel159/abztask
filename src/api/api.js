import axios from 'axios';

export async function fetchTeamMembers(page, count) {
  const response = await axios.get(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`
  );
  return response.data;
}

export async function fetchPositions() {
  const response = await axios.get(
    `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
  );
  return response.data;
}

export async function fetchToken() {
  const response = await axios.get(
    `https://frontend-test-assignment-api.abz.agency/api/v1/token`
  );
  return response.data;
}
