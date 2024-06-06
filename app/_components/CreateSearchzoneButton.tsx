import React, { useState } from "react";
import { Poi } from "../_utils/global";
import { Button } from "./ui/button";

const CreateSearchzoneButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newSearchzone, setNewSearchzone] = useState<Poi>({} as Poi);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSearchzone((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("newSearchzone", newSearchzone);
    //send req to BE
    const response = await fetch("endpoint url", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSearchzone),
    });
    console.log("response", response);
    togglePopover();
  };

  return (
    <div>
      <Button
        className="absolute top-[50px] left-0 z-50"
        onClick={togglePopover}
        variant="default"
      >
        Create Searchzone
      </Button>
      {isOpen && (
        <div className="absolute bg-white border rounded shadow-lg mt-2 p-2 top-[100px] left-0 z-[1000]">
          Form!!
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Enter title:</label>
              <input
                className="border border-black rounded"
                type="text"
                required
                onChange={handleInputChange}
                name="title"
                value={newSearchzone.title}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Enter description:</label>
              <input
                className="border border-black rounded"
                type="text"
                required
                onChange={handleInputChange}
                name="description"
                value={newSearchzone.description}
              ></input>
            </div>
            <div>
              <label htmlFor="img">Upload picture:</label>
              <input
                className="border border-black rounded"
                type="text"
                required
                onChange={handleInputChange}
                name="img_url"
                value={newSearchzone.img_url}
              ></input>
            </div>
            <div>
              <label htmlFor="creator_id">Enter creator id:</label>
              <input
                className="border border-black rounded"
                type="number"
                required
                onChange={handleInputChange}
                name="creator_id"
                value={newSearchzone.creator_id}
              ></input>
            </div>
            <div>
              <label htmlFor="poi_lat">Enter exact latitude:</label>
              <input
                className="border border-black rounded"
                type="number"
                required
                onChange={handleInputChange}
                name="poi_latitude"
                value={newSearchzone.poi_latitude}
              ></input>
            </div>
            <div>
              <label htmlFor="poi_long">Enter exact longitude:</label>
              <input
                className="border border-black rounded"
                type="number"
                required
                onChange={handleInputChange}
                name="poi_longitude"
                value={newSearchzone.poi_longitude}
              ></input>
            </div>
            <div>
              <label htmlFor="collection radius">
                Enter collection radius:
              </label>
              <input
                className="border border-black rounded"
                type="number"
                required
                onChange={handleInputChange}
                name="collection_radius"
                value={newSearchzone.collection_radius}
              ></input>
            </div>
            <div>
              <label htmlFor="search_lat">Enter search zone latitude:</label>
              <input
                className="border border-black rounded"
                type="number"
                required
                onChange={handleInputChange}
                name="search_latitude"
                value={newSearchzone.search_latitude}
              ></input>
            </div>
            <div>
              <label htmlFor="search_long">Enter search zone longitude:</label>
              <input
                className="border border-black rounded"
                type="number"
                required
                onChange={handleInputChange}
                name="search_longitude"
                value={newSearchzone.search_longitude}
              ></input>
            </div>
            <div>
              <label htmlFor="search_radius">Enter search zone radius:</label>
              <input
                className="border border-black rounded"
                type="number"
                required
                onChange={handleInputChange}
                name="search_radius"
                value={newSearchzone.search_radius}
              ></input>
            </div>
            <Button onClick={handleSubmit}>Submit</Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateSearchzoneButton;