import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import axios from "axios";

function AppHome() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchingData = async () => {
    try {
      setLoader(true);
      const url = await axios.get("https://dev.ocistok.co.id/test-fe");
      setData(url.data.data);
      setTimeout(() => {
        setLoader(false);
      }, 3000);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      {loader && (
        <div className="text-center" style={styles.loader}>
          <svg
            role="status"
            className="inline mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            ></path>
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            ></path>
          </svg>
        </div>
      )}

      <div className="grid lg:grid-cols-5 lg:gap-5  md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-2 xs:grid-cols-2 xs:gap-2 text-left container mx-auto px-4 mt-10 ">
        {data.map((dataFeeds, index) => {
          return (
            <div key={index}>
              <a
                href="/"
                className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <img
                  className="rounded-t-lg"
                  src={`${dataFeeds.image}`}
                  width={300}
                  alt=""
                />

                <p className="font-normal text-gray-700 dark:text-gray-400 mt-3 font-semibold	">
                  {dataFeeds.productName.slice(0, 17)}
                  {dataFeeds.productName.slice(
                    dataFeeds.productName.length - 4,
                    dataFeeds.productName.length
                  )}{" "}
                  ...
                </p>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                  {dataFeeds.type}
                </span>

                <p className="text-left mt-3 text-red-500 font-medium">
                  <NumberFormat displayType={'text'} value={`${dataFeeds.price}`}prefix={'Rp. '} thousandSeparator={true} />
                </p>
                <button
                  type="submit"
                  className="w-full mt-5 text-white focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                  style={styles.colorText}
                >
                  Hapus
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  colorText: {
    background: "#FF4D00",
  },

  loader: {
    display: "flex",
    background: "rgb(0, 0, 0, 0.6)",
    position: "fixed",
    inset: "0px",
    transition: "50 deg",
    textAlign: "center",
    alignItems: "center",
    zIndex: "9999",
    justifyContent: "center",
  },
};

export default AppHome;
