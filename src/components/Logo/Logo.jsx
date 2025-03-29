"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Logo = ({color="black", ...rest}) => {
  return (
    <motion.div {...rest}>
      <Image
        src={`/images/FullLogo-${color}.svg`}
        fill
        alt="logo"
        style={{ objectFit: 'contain' }}
      />
    </motion.div>
  )
}

export const LogoSmall = ({color="black", ...rest}) => {
  return (
    <motion.div {...rest}>
      <Image
        src={`/images/OneLogo-${color}.svg`}
        fill
        alt="logo"
        style={{ objectFit: 'contain' }}
      />
    </motion.div>
  )
}
