import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import wave from "../../Assets/waterfall.avif"

export default function Skill() {
  return (
    <div>
      <Skeleton animation="wave"variant="text" />
      <Skeleton animation="wave"variant="circle" width={40} height={40} ><img src={wave} alt="wave"/></Skeleton>
      <Skeleton animation="wave"variant="rect" width={210} height={118} />
    </div>
  );
}