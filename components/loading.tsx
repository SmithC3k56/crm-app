import React from 'react'
import {CircularProgress} from "@nextui-org/react";


export default function loading() {
  return (
   <CircularProgress color="secondary" label="Loading..." aria-label="Loading..."/>
  )
}
