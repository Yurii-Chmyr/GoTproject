import { useState, useEffect } from 'react';
import DataContext from './DataContext';
import ThronesService from '../services/ThronesService';

const DataProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const service = new ThronesService();

    const fetchData = async () => {
      const allCharacters = await service.getAllCharacters();
      const allHouses = await service.getAllHouses();
      setCharacters(allCharacters);
      setHouses(allHouses);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ characters, houses, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;