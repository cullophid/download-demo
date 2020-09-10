import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [files, setFiles] = useState(new Array(15).fill(""));
  const [progress, setProgress] = useState(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Fantastic File Zipper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fantastic File Zipper!</h1>
        <ul>
          {files.map((file, index) => (
            <li key={index} style={{ display: "flex", width: 500 }}>
              <input
                style={{ flex: 1, margin: 4, height: 24 }}
                value={file}
                onChange={(e) =>
                  setFiles(
                    files.map((f, i) => (index === i ? e.target.value : f))
                  )
                }
              />
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            setProgress(0);
            const body = {
              "package-name": "bundle.zip",
              "error-log-name": "errors.txt",
              groups: [
                {
                  items: files.filter(Boolean).map((url, i) => ({
                    source: {
                      url,
                    },
                    target: { name: `files/${i}.png` },
                  })),
                },
              ],
            };

            downloadFile("/download", body, (e) => setProgress(e.loaded));
          }}
        >
          Download
        </button>
        {progress && (
          <p>
            {progress > 1048576
              ? `${Math.round(progress / 1048576)}Mb`
              : `${Math.round(progress / 1024)}Kb`}
          </p>
        )}
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

function downloadFile(url, body, onProgress) {
  const content = JSON.stringify(body);

  var request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.responseType = "blob";

  request.addEventListener("progress", onProgress);
  request.onload = function () {
    // Only handle status code 200
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

    request.onerror = console.error;
  };

  request.send(content);
}
