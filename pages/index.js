import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [url, setUrl] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <input value={url} onChange={(e) => setUrl(e.target.value)} />
        <button
          onClick={() => {
            const body = {
              "package-name": "bundle.zip",
              "error-log-name": "errors.txt",
              groups: [
                {
                  items: [
                    {
                      source: {
                        url,
                      },
                      target: { name: "someFile.png" },
                    },
                  ],
                },
              ],
            };

            downloadFile("/download", body);
          }}
        >
          Download
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

function downloadFile(url, body) {
  const content = JSON.stringify(body);

  console.log("STARTING DOWNLOAD");
  var request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.responseType = "blob";

  request.onload = function () {
    // Only handle status code 200
    console.log("LOADED");
    if (request.status === 200) {
      // Try to find out the filename from the content disposition `filename` value
      var disposition = request.getResponseHeader("content-disposition");
      console.log(disposition);
      var matches = /"([^"]*)"/.exec(disposition);
      var filename = matches != null && matches[1] ? matches[1] : "bundle.zip";

      // The actual download
      var blob = new Blob([request.response], { type: "application/zip" });
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;

      document.body.appendChild(link);
      console.log("click link");
      link.click();

      document.body.removeChild(link);
    }

    request.onerror = console.log;
  };

  request.send(content);
}
