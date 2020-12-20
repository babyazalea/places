import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "LH",
    description: "this is our home",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/02/19/10/38/facade-1209331_960_720.jpg",
    address: "JungangDaero 862",
    location: {
      lat: 111.123123123,
      lng: -77.123123123,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "LH",
    description: "this is our home",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/02/19/10/38/facade-1209331_960_720.jpg",
    address: "JungangDaero 862",
    location: {
      lat: 111.123123123,
      lng: -77.123123123,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
