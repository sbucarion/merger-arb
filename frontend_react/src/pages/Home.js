import axios from 'axios';
import React, { useEffect, useState } from 'react';



const fetchData = async () => {
  const response = await axios.get('http://127.0.0.1:8000/data/');
  const data = response.data;

  return data;
}


const Home = () => {
  const [jsonData, setJsonData] = useState([]);

  //setJsonData(fetchData());

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setJsonData(data);
    };

    getData();
  }, []);

  console.log(typeof jsonData);
  console.log("hello");

  return (
    <div>
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>Accession No</th>
            <th>CIK</th>
            <th>Unix Number</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(jsonData).map((key) => {
            const item = jsonData[key];
            return (
              <tr key={key}>
                <td>{item.accession_no}</td>
                <td>{item.cik}</td>
                <td>{item.unix_number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home