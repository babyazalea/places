import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "song's park",
    description: "this is song's park in front of our home.",
    imageUrl:
      "https://www.busaninnews.co.kr/news/photo/201709/2944_7929_2154.jpg",
    address: "부산광역시 부산진구 전포동 전포2동 중앙대로 818",
    location: {
      lat: 35.1641929,
      lng: 129.0643827,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "citizen park",
    description: "this is our favorite park",
    imageUrl:
      "https://www.visitbusan.net/uploadImgs/files/cntnts/20191227194943122_oen",
    address: "부산광역시 부산진구 범전동 시민공원로 73",
    location: {
      lat: 35.1641962,
      lng: 129.0627412,
    },
    creator: "u2",
  },
];

const UpadatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>;
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="decription"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid decription."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpadatePlace;
