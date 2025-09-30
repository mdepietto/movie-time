import { useEffect, useState } from 'react';

function App() {
  const [mockData, setMockData] = useState();

  const mockFetch = async () => {
    try {
      const response = await fetch('http://localhost:4040/')

      if (!response.ok) {
        throw new Error('Mock data could not be fetched');
      }

      const data = await response.json()

      setMockData(data);
    }

    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    mockFetch();
  }, [])

  return (
    <div>
      {mockData?.message}
    </div>
  );
}

export default App;
