import { PathParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import React from 'react'

const PodcatsDetails = ({params}: {params: {podcastId : string}}) => {
  return (
    <p className='text-white-1'>podacst for :{params.podcastId}</p>
  )
}

export default PodcatsDetails