import React, { useState, useEffect } from "react";
import "./Details.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Editor } from "@monaco-editor/react";
import { Link, useParams } from "react-router-dom";

const DetailCheckbox = ({ listCheckboxes }) => {
  const params = useParams();

  const foundCheckbox = listCheckboxes.find(
    (el) => el.id === parseInt(params.id)
  );

  const back = "< BACK";
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedScss, setCopiedScss] = useState(false);
  const [htmlText, setHtmlText] = useState("");
  const [scssText, setScssText] = useState("");

  const htmlCode = `${foundCheckbox.html}`;
  const scssCode = `${foundCheckbox.scss}`;

  useEffect(() => {
    setHtmlText(document.querySelector(".codigoHtml").innerText);
  }, []);

  useEffect(() => {
    setScssText(document.querySelector(".codigoScss").innerText);
  }, []);

  return (
    <>
      <Link to={"/listCheckboxes"}>
        <button className="backList">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{back}
        </button>
      </Link>
      <div className="detail">
        <div className="card detailCard">
          {foundCheckbox ? <>{foundCheckbox.component}</> : "error"}
        </div>
        <div className="html">
          <div className="logoHtml">
            <h3>
              <img
                className="logosHTMLCSS"
                src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
                alt="logo"
              />
            </h3>
            <CopyToClipboard text={htmlText}>
              <button
                className="copy"
                onClick={() => setCopiedHtml(!copiedHtml)}
              >
                {!copiedHtml ? "COPY CODE </>" : <span>COPY</span>}
              </button>
            </CopyToClipboard>
          </div>
          <div className="codeHtml">
            <pre className="codigoHtml">{htmlCode}</pre>
            <Editor
              className="editor"
              height="20vh"
              theme="vs-dark"
              defaultLanguage="html"
              value={htmlCode}
            ></Editor>
          </div>
        </div>
        <div className="scss">
          <div className="logoScss">
            <h3>
              <img
                className="logosHTMLCSS"
                src="https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png"
                alt="logo"
              />
            </h3>
            <CopyToClipboard text={scssText}>
              <button
                className="copy"
                onClick={() => setCopiedScss(!copiedScss)}
              >
                {!copiedScss ? "COPY CODE </>" : <span>COPY</span>}
              </button>
            </CopyToClipboard>
          </div>
          <div className="codeScss">
            <pre className="codigoScss">{scssCode}</pre>
            <Editor
              className="editor"
              height="69.8vh"
              theme="vs-dark"
              defaultLanguage="scss"
              value={scssCode}
            ></Editor>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCheckbox;
