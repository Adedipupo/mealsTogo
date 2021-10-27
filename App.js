import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  {RestuarantScreen}  from './src/features/restuarants/screens/restuarant-screen';


export default function App() {
  return (
    <>
      <RestuarantScreen />
      <StatusBar style="auto" />
    </>
  );
}

