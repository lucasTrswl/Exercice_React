import { useParams } from 'react-router-dom'
import React, { useState } from 'react';

import EXERCICE1 from '../EXERCICE1/EXERCICE1'

interface User {
  nom: string,
  description: string,
  ville: string,
}



const User = () => {

  const users = ['Hugo', "svdcsssvbdfvfzvbssv", "Paris"]

  return (

    users.map((user) => <li>{user}</li>)
    
  )
}

export default User