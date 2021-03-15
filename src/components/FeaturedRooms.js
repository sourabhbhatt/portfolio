import React, { Component } from 'react';
import Loading from '../ReUsable/Loading';
import Room from './Room';
import Title from '../ReUsable/Title';
import data from '../workData'

export default function FeaturedRooms() {
  const [loading, setLoading] = React.useState(true)
  let rooms = data.map(room => <Room key={room.id} room={room} />);
  React.useEffect(() => { setTimeout(() => setLoading(false), 1000) }, [])
  return (
    <>
      {!!loading ? <Loading /> :
        <section className="featured-rooms">
          <Title title="My Works" />
          <div className="featured-rooms-center">{rooms}</div>
        </section>
      }
    </>
  )
}