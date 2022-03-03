import React from "react";

function AppFooter() {
  return (
    <div className="text-center">
      <footer className="p-4 mt-10 bg-white rounded-lg shadow p-7 dark:bg-gray-800"  style={styles.background}>
      <span className="text-1xl	text-white-100 sm:text-center text-center white:text-white-100">
        Copyright{" "}
        <a href="https://flowbite.com" className="hover:underline">
        © PT Ocommerce Capital Indonesia
        </a>
      </span>
    </footer>
    </div>
  );
}

const styles = {
  background : {
      backgroundColor : '#ff8b00',
      color: 'white',
  }
}

export default AppFooter;
