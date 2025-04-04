export async function getDataUser(): Promise<any> {
  const res = await fetch(
    'http://localhost:5001/emulator-demo-fb/us-central1/fetch-user-data',
    {
      headers: {
        authorization: process.env.DEV_USER_TOKEN ?? '',
      },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
