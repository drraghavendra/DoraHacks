import React from 'react'
import Layout from '../layouts/AdvertiserLayout'
import Dashboard from '../components/Advertiser/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Profile from '../components/Advertiser/Profile'
import CreateAd from '../components/Advertiser/CreateAd'

const Advertiser = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-ad" element={<CreateAd />} />
      </Routes>
    </Layout>
  )
}

export default Advertiser