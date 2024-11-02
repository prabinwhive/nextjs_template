import styles from "@/styles/about.module.css";

// --------------------------------------------

export default function AboutView() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.content}>
        <h1> This is about page</h1>

        <p>
          You can also create such page with easy routing set up of Next JS.
        </p>

        <p>Please visit the Next JS routing section of documentation</p>

        <a
          href="https://nextjs.org/docs/app/building-your-application/routing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Learn more about Next JS Routing
        </a>
      </div>
    </div>
  );
}
