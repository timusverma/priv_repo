import React, { useState, useEffect } from "react";
import { validURL } from "../utils";
import { Modal } from "./Modal";
import Carousel from "./Carousel";

var defaultCarouselImages = [
  "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=916",
  "https://www.petplan.com.au/blog/wp-content/uploads/2020/03/Dog-guest-blogger.jpg"
];

export default function MainRenderComponent(props) {
  const [uploadImageSelect, setUploadImageSelect] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [urlInput, setUrlInput] = useState("");

  let handleCloseModal = () => setShowModal(false);
  let handleShowModal = () => setShowModal(true);

  let handleSetUploadImageSelect = e => setUploadImageSelect(e.target.files[0]);

  useEffect(() => {
    if (uploadImageSelect) {
      var formData = new FormData();
      formData.append("image", uploadImageSelect, uploadImageSelect.name);
      const requestOptions = {
        method: "POST",
        // headers: { "Content-Type": "image/png" },
        body: formData
      };

      fetch(
        "https://api.imgbb.com/1/upload?expiration=3600&key=7e67d7abd088f7f28e6a3ef5df3e273c",
        requestOptions
      )
        .then(response => response.json())
        .then(data => {
          // imgArr.push(data.url);
          // setImgArr(imgArr);
          // console.log("data",data,imgArr)
          // let imagesArr = JSON.parse(window.localStorage.getItem("images"));
          defaultCarouselImages.push(data.data.url);
          // window.localStorage.setItem("images", JSON.stringify(imagesArr));
          // console.log("data", data, imagesArr, window.localStorage);
        })
        .catch(e =>
          window.alert("Some issue in uploading image, please try again!!")
        );
    }
  }, [uploadImageSelect, urlInput]);

  var handleInputUrl = e => {
    setUrlInput(e.target.value || "");
  };

  var submitImageUrlHandler = () => {
    let isValidUrl = validURL(urlInput);
    if (!isValidUrl)
      window.alert(
        "Url doesnt seems fine.. please check the URL and input again"
      );
    else defaultCarouselImages.push(urlInput);
  };

  return (
    <div className="App">
      <Modal show={showModal} handleClose={handleCloseModal}>
        <div className="row">
          <div
            style={{
              padding: "20px 0px 20px 20px",
              display: "flex"
            }}
          >
            Add via link/url
          </div>
          <div style={{ margin: "auto" }}>
            <div>
              <input
                style={{
                  // width: "350px",
                  height: "25px",
                  display: "flex",
                  margin: "auto"
                }}
                id="addURL"
                type="text"
                onChange={handleInputUrl}
              />
            </div>
            <div>
              <button
                style={{ margin: "auto", "margin-top": "10px" }}
                onClick={submitImageUrlHandler}
              >
                Add Image
              </button>
            </div>
          </div>
        </div>
        <hr style={{ margin: "5px" }} />

        <div
          style={{
            padding: "20px 0px 20px 20px",
            display: "flex"
          }}
        >
          or Upload Image from device
        </div>
        <div
          style={{
            display: "flex",
            padding: "0px 0px 20px 10px",
            margin: "auto"
          }}
        >
          <input
            type="file"
            id="uploadImage"
            onChange={handleSetUploadImageSelect}
          />
        </div>
        {/* <p>upload image</p> */}
      </Modal>

      {/* <input type="file" id="uploadImage" onChange={readUrl} /> */}
      {/* <img src={"C:\fakepath\876664.png "}></img> */}
      <Carousel images={defaultCarouselImages} />
      <div className="row" style={{ padding: "20px" }}>
        <button className="addImageButton" onClick={handleShowModal}>
          Add Image
        </button>
      </div>
    </div>
  );
}
