import React, { useState } from 'react';

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const postData = new FormData();
    postData.append('survey[name]', formData.name);
    postData.append('survey[description]', formData.description);

    fetch('http://localhost:3000/surveys', {
      method: 'POST',
      body: postData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
      })
      .catch((error) => {
        // Handle any errors
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <input type="description" name="description" value={formData.description} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;