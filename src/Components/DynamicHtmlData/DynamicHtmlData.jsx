import React from "react";
import styles from "./DynamicHtmlData.module.css";

const DynamicHtmlData = ({ user }) => {
  return (
    <div className={styles.user}>
      <h2>Name : {user.name}</h2>
      <h3>Email : {user.email}</h3>
      <h4>Phone : {user.phone}</h4>
      <h4>Address : {user.address.city}</h4>
    </div>
  );
};

export default DynamicHtmlData;
