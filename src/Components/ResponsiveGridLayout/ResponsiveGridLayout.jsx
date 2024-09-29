import React from "react";
import styles from './ResponsiveGridLayout.module.css'

const ResponsiveGridLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>Column 1</div>
      <div className={styles.column}>Column 2</div>
      <div className={styles.column}>Column 3</div>
    </div>
  );
};

export default ResponsiveGridLayout;
