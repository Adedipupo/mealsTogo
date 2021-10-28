import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  {RestuarantScreen}  from './src/features/restuarants/screens/RestuarantScreen';


export default function App() {
  return (
    <>
      <RestuarantScreen />
      <StatusBar style="auto" />
    </>
  );
}

