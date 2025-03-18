import YoutubeGallery from '@/components/UiPages/YoutubeGallery';
import React from 'react'
import { FetchYoutubeDataRequest } from '@/../api.service.js'

export const revalidate = 900; // 15 minutes

const FetchedYoutubeData = async () => {
  let res = await FetchYoutubeDataRequest();
  if(res?.status == 200) return res?.data;
}

export default async function YoutubeStaticPage() {

  let youtubeData = await FetchedYoutubeData();


  return (
    <YoutubeGallery youtubeData={youtubeData}/>
  )
}
