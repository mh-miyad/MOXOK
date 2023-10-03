'use client'
import React from 'react'
import axios from 'axios';

const DashBoard = () => {
  axios.post('/api/openAi', {
  params: {
    text: 'Hello, world!'
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

  return (
    <div>DashBoard</div>
  )
}

export default DashBoard
