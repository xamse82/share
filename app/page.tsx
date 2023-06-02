"use client"
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Home from './navbar/page';
import Hero from '@/component/footer/page';
import Footer from './footer/page';


export default function APP() {
  return (
    <div>
      <Home/>
      <Hero/>
      <Footer/>
    </div>
  )
}