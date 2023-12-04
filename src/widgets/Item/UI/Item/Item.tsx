import { Avatar } from "antd";
import { FC } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { ItemProps } from "../../models/types";
import "./Item.css";

interface ImageItemProps {
  item: ItemProps;
}
const assetsPath = import.meta.env.VITE_PUBLIC_RESOURCE;

const ImageItem: FC<ImageItemProps> = ({ item }) => {
  const backgroundImagePath = `${assetsPath}/${item.background}`;
  const itemImagePath = `${assetsPath}/${item.image}`;
  const profilePath = `${assetsPath}/${item.profile}`;

  return (
    <div className="image-item transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-md">
      <div className="relative overlapping-img">
        <img
          src={backgroundImagePath}
          alt=""
          className="absolute w-full top-0 left-0 img1"
        />

        <div className="absolute top-0 left-0 ml-2 mt-2 text-white">
          {item.category}
        </div>
        <div className="absolute top-0 right-0 mr-2 mt-2 text-white">
          {item.isFavorite ? <CiHeart /> : <FaHeart />}
        </div>

        <div>
          <img
            src={itemImagePath}
            alt=""
            className="relative image-overlay bottom-0"
          />
        </div>
      </div>

      <div className="item-description">
        <div className="item-info flex justify-between">
          <div className="item-name">{item.itemName}</div>
          <div className="item-price">{item.price}</div>
        </div>
        <div className="mt-2">
          <Avatar
            style={{
              verticalAlign: "middle",
              margin: "10px",
            }}
            size="large"
            icon={<img src={profilePath} />}
          >
            {item.author}
          </Avatar>
          <span className="item-name">{item.author}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
