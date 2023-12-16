import React from 'react'
import Gifcard from './Gifcard'

const GifCotainer = ({data}) => {
  return (
    <div className="flex justify-around h-96">
          <Gifcard
            title={"Bored Cat GIF"}
            gifUrl={
              "https://media3.giphy.com/media/mlvseq9yvZhba/giphy.gif?cid=a5a58d70b0sl62w5avvkkiuy2grqu3s2ov75065hbrzbxudq&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            }
            alt={""}
          />
          <Gifcard
            title={"Bored Cat GIF"}
            gifUrl={
              "https://media2.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif?cid=a5a58d70b0sl62w5avvkkiuy2grqu3s2ov75065hbrzbxudq&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            }
            alt={""}
          />
          <Gifcard
            title={"Bored Cat GIF"}
            gifUrl={
              "https://media2.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif?cid=a5a58d70b0sl62w5avvkkiuy2grqu3s2ov75065hbrzbxudq&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            }
            alt={""}
          />
        </div>
  )
}

export default GifCotainer