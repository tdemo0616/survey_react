import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Table = () => {
  // Example data for the table
  const [surveyData, setSurveyData] = useState([])
  // const data = [
  //       {
  //           "id": 3,
  //           "name": "xcgvhjlj;khjghcgvhbkjl;",
  //           "description": "most important and must"
  //       }
  //   ];

  const getSurvey = async () => {
    try {
      const response = await axios.get("http://localhost:3000/surveys")
      console.log(response)
      setSurveyData(response.data.survey)
    } catch (error) {

    }
  }

  useEffect(() => {
    getSurvey()
  }, [])

  return (
    <div>
      <h2>Survey Form</h2>
      {/*<table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {surveyData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>*/}
    </div>
  );
};

export default Table;