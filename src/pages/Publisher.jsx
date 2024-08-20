import React from 'react'
import Layout from '../layouts/PublisherLayout'
import Dashboard from '../components/Publisher/Dashboard'
import { Route, Routes } from 'react-router-dom'

const Publisher = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  )
}

export default Publisher