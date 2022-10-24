import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Best Customer Service',
    description: 'We do have a dedicated team that possesses more than 6 years of experience in the travel industry and they are ready to make your trip enjoyable.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Most Affordable',
    description: 'No need to surf multiple websites for packages, quotes, travel plans. With our state of the art process we always present you the best deals always.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'We operate 24/7',
    description: 'We work 24/7 to make sure that we fulfill your needs.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Best vacation deals',
    description: 'We provide the best deals for your vacation trips. Contact us sooner and get yourself the best deal ever!',
    icon: <ContactSupportIcon />,
  },
]
