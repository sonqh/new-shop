import comment from "@/assets/images/comment.png";
import handset from "@/assets/images/handset.png";
import footerImg from "@assets/images/footer-img.png";
import { FC } from "react";

const LayoutFooter: FC = () => {
  return (
    <>
      <footer className="p-10">
        <img src={footerImg} className="w-full" />
        <div className="footer bottom-0 w-full p-5">
          <div>
            <span className="text-white text-lg font-bold ">Navigation</span>
            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col space-y-4">
                <a className="link-hover link text-sm">Home</a>
                <a className="link-hover link text-sm">About us</a>
                <a className="link-hover link text-sm">Our teams</a>
              </div>
              <div className="flex flex-col space-y-4">
                <a className="link-hover link text-sm">Whitepaper</a>
                <a className="link-hover link text-sm">Marketplace</a>
                <a className="link-hover link text-sm">Roadmap</a>
              </div>
              <div className="flex flex-col space-y-4">
                <a className="link-hover link text-sm">FAQs</a>
                <a className="link-hover link text-sm">News</a>
                <a className="link-hover link text-sm">Community</a>
              </div>
            </div>
          </div>
          <div>
            <span className="text-white text-lg font-bold ">Contact us</span>
            <a className="link-hover link text-sm flex items-center">
              <div className="flex items-center justify-center">
                <img src={handset} />
              </div>
              <span className="mx-1">012345678910</span>
            </a>
            <a className="link-hover link text-sm flex items-center">
              <div className="flex items-center justify-center">
                <img src={comment} />
              </div>
              <span className="mx-1">tymex-talent@tyme.com</span>
            </a>
          </div>
          <div>
            <div className="flex flex-col">
              <span className="text-white text-lg font-bold">
                Subscribe to receive our latest update
              </span>
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="rounded p-2 w-60"
                />
                <button className="btn text-white bg-gradient-to-br from-pink-600 to-purple-600 ml-2 w-40">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-external border-t border-gray-500 my-4 pt-4">
          <div className="flex justify-between">
            <span className="text-white text-sm font-bold">
              ©2023 Tyme - Edit. All Rights reserved.
            </span>
            <div className="flex space-x-4">
              <a className="link-hover link text-sm">Security</a>
              <a className="link-hover link text-sm">Legal</a>
              <a className="link-hover link text-sm">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LayoutFooter;
